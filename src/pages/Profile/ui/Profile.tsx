import { ReducersList, useAppDispatch } from 'app/providers/StoreProvider';
import { fetchProfileData, profileReducer, ProfileCard } from 'entities/Profile';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader from 'shared/components/DynamicModuleLoader';

const initialReducers:ReducersList = {
    profile: profileReducer,
};

const Profile:FC = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div>
                <h1>{t('Profile page title')}</h1>

                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default Profile;
