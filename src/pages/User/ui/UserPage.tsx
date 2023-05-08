import { ReducersList, useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import {
    fetchProfileData,
    profileReducer,
    ProfileCard,
    getProfileError,
    getProfileIsLoading,
    getProfileForm,
} from 'entities/Profile';
import {
    FC, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader from 'shared/components/DynamicModuleLoader';
import { useParams } from 'react-router-dom';
import { PageContainer } from 'shared/ui';

const initialReducers:ReducersList = {
    profile: profileReducer,
};

const UserPage:FC = () => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    const { id } = useParams<{id: string}>();

    const form = useAppSelector(getProfileForm);
    const error = useAppSelector(getProfileError);
    const isLoading = useAppSelector(getProfileIsLoading);

    useEffect(() => {
        if (!id) return;

        dispatch(fetchProfileData(id));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <PageContainer>
                <h1>{t('User page title')}</h1>
                <ProfileCard
                    data={form}
                    error={error}
                    isLoading={isLoading}
                    isReadonly
                />
            </PageContainer>
        </DynamicModuleLoader>
    );
};

export default UserPage;
