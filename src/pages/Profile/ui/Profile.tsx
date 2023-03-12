import { ReducersList } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader from 'shared/components/DynamicModuleLoader';

const initialReducers:ReducersList = {
    profile: profileReducer,
};

const Profile:FC = () => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div>
                <h1>{t('Profile page title')}</h1>
            </div>
        </DynamicModuleLoader>
    );
};

export default Profile;
