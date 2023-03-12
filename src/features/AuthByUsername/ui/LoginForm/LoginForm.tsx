import {
    FC, memo, useCallback, useEffect, useMemo,
} from 'react';
import cn from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import {
    AppButton, AppButtonTheme, CodeInput, Text, TextTheme,
} from 'shared/ui';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/hooks';
import { useStore } from 'react-redux';
import { ReducersList, ReduxStoreWithManager } from 'app/providers/StoreProvider';
import useDynamicModuleLoader from 'shared/hooks/useDynamicModuleLoader';
import DynamicModuleLoader from 'shared/components/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

const initialReducers:ReducersList = {
    loginForm: loginReducer,
};

export interface LoginFormProps {
    className?: string,
    onFinish: () => void
}

const LoginForm:FC<LoginFormProps> = (props) => {
    const { className, onFinish } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useAppSelector(getLoginUsername);
    const password = useAppSelector(getLoginPassword);
    const isLoading = useAppSelector(getLoginIsLoading);
    const error = useAppSelector(getLoginError);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await dispatch(loginByUserName({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onFinish();
        }
    }, [dispatch, onFinish, password, username]);

    const isDisabledButton = useMemo(
        () => !username || !password || isLoading,
        [isLoading, password, username],
    );

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <form className={cn(styles.LoginForm, className)} onSubmit={onSubmit}>
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
                    type="submit"
                >
                    {t('Login')}

                </AppButton>
            </form>
        </DynamicModuleLoader>
    );
};

export default memo(LoginForm);
