import { FC, memo } from 'react';
import cn from 'shared/lib/classNames';
import styles from './Icon.module.scss';

interface IconProps {
    className?: string
    Svg: React.FC<React.SVGProps<SVGSVGElement>>
}

const Icon: FC<IconProps> = (props) => {
    const {
        className,
        Svg,
    } = props;

    return (
        <Svg
            className={cn(styles.Icon, className)}
        />
    );
};

export default memo(Icon);
