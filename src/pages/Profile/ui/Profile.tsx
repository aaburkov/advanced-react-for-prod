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
} from 'entities/Profile';
import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader from 'shared/components/DynamicModuleLoader';
import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Country';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const initialReducers:ReducersList = {
    profile: profileReducer,
};

const Profile:FC = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const form = useAppSelector(getProfileForm);
    const error = useAppSelector(getProfileError);
    const isLoading = useAppSelector(getProfileIsLoading);
    const isReadonly = useAppSelector(getProfileReadonly);

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
