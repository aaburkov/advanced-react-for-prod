import {
    FC, MouseEvent, PropsWithChildren, useCallback, useEffect,
} from 'react';
import cn from 'shared/lib/classNames';
import styles from './Modal.module.scss';
import Portal from '../Portal/Portal';

interface ModalProps {
    className?: string;
    title?: string;
    isOpen: boolean;
    hideOnClickOverlay?: boolean;
    onClose: () => void
}
const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
    const {
        children,
        className,
        title,
        isOpen,
        onClose,
        hideOnClickOverlay = true,
    } = props;

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
    return (
        <Portal>
            <div className={cn(styles.Modal, {
                [styles.opened]: isOpen,
            }, className)}
            >
                <div className={styles.overlay} onClick={clickOnOverlay}>
                    {
                        title && (
                            <div className={styles.header}>
                                <h3>{title}</h3>
                            </div>
                        )
                    }
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
