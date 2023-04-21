import { ReducersList, useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import {
    fetchProfileData,
    profileReducer,
    ProfileCard,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    getProfileForm,
    getProfileValidateErrors,
} from 'entities/Profile';
import {
    FC, useCallback, useEffect, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader from 'shared/components/DynamicModuleLoader';
import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const initialReducers:ReducersList = {
    profile: profileReducer,
};

const Profile:FC = () => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const form = useAppSelector(getProfileForm);
    const error = useAppSelector(getProfileError);
    const isLoading = useAppSelector(getProfileIsLoading);
    const isReadonly = useAppSelector(getProfileReadonly);
    const validateErrors = useAppSelector(getProfileValidateErrors);

    const validateErrorTranslates = useMemo(() => ({
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
        [ValidateProfileError.INCORRECT_USER_AGE]: t('Incorrect user age'),
        [ValidateProfileError.INCORRECT_USER_COUNTRY]: t('Incorrect user country'),
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
    }), []);
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const changeNameHandler = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            name: value,
        }));
    }, [dispatch]);

    const changeSurnameHandler = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            surname: value,
        }));
    }, [dispatch]);

    const changeAgeHandler = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            age: Number(value),
        }));
    }, [dispatch]);

    const changeCityHandler = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            city: value,
        }));
    }, [dispatch]);

    const changeUsernameHandler = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            username: value,
        }));
    }, [dispatch]);

    const changeAvatarHandler = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            avatar: value,
        }));
    }, [dispatch]);

    const changeCurrencyHandler = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({
            currency: value,
        }));
    }, [dispatch]);

    const changeCountryHandler = useCallback((value: Countries) => {
        dispatch(profileActions.updateProfile({
            country: value,
        }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div>
                <h1>{t('Profile page title')}</h1>
                <ProfilePageHeader />
                {
                    validateErrors?.length && validateErrors.map((err) => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslates[err]}
                        />
                    ))
                }
                <ProfileCard
                    data={form}
                    error={error}
                    isLoading={isLoading}
                    isReadonly={isReadonly}
                    onChangeName={changeNameHandler}
                    onChangeSurname={changeSurnameHandler}
                    onChangeAge={changeAgeHandler}
                    onChangeCity={changeCityHandler}
                    onChangeUsername={changeUsernameHandler}
                    onChangeAvatar={changeAvatarHandler}
                    onChangeCurrency={changeCurrencyHandler}
                    onChangeCountry={changeCountryHandler}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default Profile;
