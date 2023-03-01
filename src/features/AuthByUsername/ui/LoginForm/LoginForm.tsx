import {
    FC, memo, useCallback, useMemo,
} from 'react';
import cn from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import {
    AppButton, AppButtonTheme, CodeInput, Text, TextTheme,
} from 'shared/ui';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/hooks';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
    className?: string
}
const LoginForm:FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {
        username, password, isLoading, error,
    } = useAppSelector(getLoginState);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onSubmit = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    const isDisabledButton = useMemo(
        () => !username || !password || isLoading,
        [isLoading, password, username],
    );

    return (
        <div className={cn(styles.LoginForm, className)}>
            {
                error && (
                    <Text
                        theme={TextTheme.ERROR}
                        text={error}
                        className={styles.errorMesage}
                    />
                )
            }
            <CodeInput
                autofocus
                placeholder={t('Enter username') as string}
                type="text"
                className={styles.input}
                value={username}
                onChange={onChangeUsername}
            />
            <CodeInput
                placeholder={t('Enter password') as string}
                type="text"
                className={styles.input}
                value={password}
                onChange={onChangePassword}
            />
            <AppButton
                disabled={isDisabledButton}
                theme={AppButtonTheme.OUTLINE}
                className={styles.loginBtn}
                onClick={onSubmit}
            >
                {t('Login')}

            </AppButton>
        </div>
    );
};

export default memo(LoginForm);
