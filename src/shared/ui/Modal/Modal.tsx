import {
    FC, MouseEvent, PropsWithChildren, useCallback, useEffect, useState,
} from 'react';
import cn from 'shared/lib/classNames';
import styles from './Modal.module.scss';
import Portal from '../Portal/Portal';
import Text from '../Text/Text';

interface ModalProps {
    className?: string;
    title?: string | null;
    isOpen: boolean;
    hideOnClickOverlay?: boolean;
    onClose: () => void;
    lazy?: boolean
}
const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
    const {
        children,
        className,
        title,
        isOpen,
        onClose,
        hideOnClickOverlay = true,
        lazy,
    } = props;

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const onEscDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    const changeBodyHiddenClass = (type:'enable' | 'disable') => {
        if (type === 'enable') {
            document.body.classList.add('hidden');
        } else {
            document.body.classList.remove('hidden');
        }
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onEscDown);
            changeBodyHiddenClass('enable');
        } else {
            changeBodyHiddenClass('disable');
        }

        return () => {
            window.removeEventListener('keydown', onEscDown);
        };
    }, [isOpen, onEscDown]);

    const clickOnOverlay = () => {
        if (hideOnClickOverlay) {
            onClose();
        }
    };

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={cn(styles.Modal, {
                [styles.opened]: isOpen,
            })}
            >
                <div className={styles.overlay} onClick={clickOnOverlay}>
                    <div className={cn(styles.contentContainer, className)}>
                        {
                            title && (
                                <div className={styles.header}>
                                    <Text title={title} />
                                </div>
                            )
                        }
                        <div className={styles.content} onClick={onContentClick}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
