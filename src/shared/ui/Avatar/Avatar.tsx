import {
    CSSProperties, FC, memo, useEffect, useMemo, useState,
} from 'react';
import cn from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
}
enum ImgLoadState {
    EMPTY,
    LOADING,
    LOADED,
    ERROR
}
const Avatar: FC<AvatarProps> = (props) => {
    const {
        src,
        className,
        size = 100,
    } = props;

    const { t } = useTranslation();
    const [loadState, setLoadState] = useState<ImgLoadState>(ImgLoadState.LOADING);

    const customStyle = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    useEffect(() => {
        if (!src) {
            setLoadState(ImgLoadState.EMPTY);
            return;
        }

        const img = new Image();
        img.src = src;
        img.onload = () => {
            setLoadState(ImgLoadState.LOADED);
        };
        img.onerror = () => {
            setLoadState(ImgLoadState.ERROR);
        };
    }, [src]);

    return (
        <div
            className={cn(styles.Avatar, {
                [styles.loading]: loadState === ImgLoadState.LOADING,
                [styles.error]: loadState === ImgLoadState.ERROR,
            }, className)}
            style={customStyle}
        >
            {
                loadState === ImgLoadState.LOADED && (
                    <img
                        src={src}
                        className={styles.avatarImg}
                        alt={t('User avatar')}
                    />
                )
            }
        </div>
    );
};

export default memo(Avatar);
