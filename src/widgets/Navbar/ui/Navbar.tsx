import cn from 'shared/lib/classNames';
import {
    AppButton, AppButtonTheme, AppLink, AppLinkTheme, Text, TextTheme,
} from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { FC, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/hooks';
import { getUserAuthData, userActions } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

const Navbar:FC<NavbarProps> = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
    const authData = useAppSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const onCloseAuthModal = useCallback(() => {
        setIsOpenLoginModal(false);
    }, [setIsOpenLoginModal]);

    const onOpenAuthModal = useCallback(() => {
        setIsOpenLoginModal(true);
    }, [setIsOpenLoginModal]);

    const onLogount = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <nav className={cn(styles.Navbar, className)}>
            <Text className={styles.appName} title={t('MyAPP')} theme={TextTheme.SECONDARY} />
            {
                authData ? (
                    <div className={styles.links}>
                        <AppLink to={RoutePath.articles_create} theme={AppLinkTheme.SECONDARY}>
                            {t('Create article')}
                        </AppLink>
                        <AppButton
                            theme={AppButtonTheme.CLEAR_INVERTED}
                            onClick={onLogount}
                        >
                            {t('Logout')}

                        </AppButton>
                    </div>
                ) : (
                    <div className={styles.links}>
                        <AppButton
                            theme={AppButtonTheme.CLEAR_INVERTED}
                            onClick={onOpenAuthModal}
                        >
                            {t('Login')}

                        </AppButton>

                    </div>
                )
            }
            {
                isOpenLoginModal
                && <LoginModal isOpen={isOpenLoginModal} onClose={onCloseAuthModal} />
            }

        </nav>
    );
};

export default Navbar;
