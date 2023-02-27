import { FC } from 'react';
import cn from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, CodeInput } from 'shared/ui';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}
export const LoginForm:FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={cn(styles.LoginForm, className)}>
            <CodeInput
                autofocus
                placeholder={t('Enter username') as string}
                type="text"
                className={styles.input}
            />
            <CodeInput
                placeholder={t('Enter password') as string}
                type="text"
                className={styles.input}
            />
            <AppButton className={styles.loginBtn}>{t('Login')}</AppButton>
        </div>
    );
};
