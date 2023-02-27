import cn from 'shared/lib/classNames';
import {
    AppButton, AppButtonTheme,
} from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { FC, useCallback, useState } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

const Navbar:FC<NavbarProps> = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const onCloseAuthModal = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const onOpenAuthModal = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    return (
        <div className={cn(styles.Navbar, className)}>
            <div className={styles.links}>
                <AppButton
                    theme={AppButtonTheme.CLEAR_INVERTED}
                    onClick={onOpenAuthModal}
                >
                    {t('Login')}

                </AppButton>

            </div>
            <LoginModal isOpen={isOpen} onClose={onCloseAuthModal} />
            {/* <Modal isOpen={isOpen} onClose={onToggleAuthModal}>
             eslint-disable-next-line i18next/no-literal-string *
                <h2>I`m MODAL window!!!</h2>
            </Modal> */}
        </div>
    );
};

export default Navbar;
