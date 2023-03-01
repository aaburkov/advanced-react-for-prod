import { FC } from 'react';
import cn from 'shared/lib/classNames';
import Modal from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import styles from './LoginModal.module.scss';
import LoginForm from '../LoginForm/LoginForm';

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
            <LoginForm />
        </Modal>
    );
};
