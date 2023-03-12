import { FC, Suspense } from 'react';
import cn from 'shared/lib/classNames';
import Modal from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { StripesLoader } from 'shared/ui/Loaders';
import styles from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}
export const LoginModal:FC<LoginModalProps> = (props) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    const { t } = useTranslation();

    return (
        <Modal
            className={cn(styles.LoginModal, className)}
            isOpen={isOpen}
            onClose={onClose}
            lazy
            title={t('Auth modal header')}
        >
            <Suspense fallback={<StripesLoader />}>
                <LoginFormAsync onFinish={onClose} />
            </Suspense>
        </Modal>
    );
};
