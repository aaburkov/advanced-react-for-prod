import { FC, useCallback } from 'react';
import cn from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import {
    AppButton, AppButtonTheme, Text,
} from 'shared/ui';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string,
}

const ProfilePageHeader:FC<ProfilePageHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const dispath = useAppDispatch();
    const profileReadOnly = useAppSelector(getProfileReadonly);

    const editHandler = useCallback(() => {
        dispath(profileActions.setReadonly(false));
    }, [dispath]);

    const saveHandler = useCallback(() => {
        dispath(updateProfileData());
    }, [dispath]);

    const cancelHandler = useCallback(() => {
        dispath(profileActions.cancelEdit());
    }, [dispath]);

    return (
        <div className={cn(styles.ProfilePageHeader, className)}>
            <Text title={t('Profile')} />
            <div className={styles.btnContainer}>
                {
                    profileReadOnly ? (
                        <AppButton
                            className={styles.editBtn}
                            theme={AppButtonTheme.OUTLINE}
                            onClick={editHandler}
                        >
                            {t('Edit')}
                        </AppButton>
                    ) : (
                        <>
                            <AppButton
                                className={styles.saveBtn}
                                theme={AppButtonTheme.OUTLINE}
                                onClick={saveHandler}
                            >
                                {t('Save')}
                            </AppButton>
                            <AppButton
                                className={styles.cancelBtn}
                                theme={AppButtonTheme.OUTLINE_RED}
                                onClick={cancelHandler}
                            >
                                {t('Cancel')}
                            </AppButton>
                        </>

                    )
                }
            </div>
        </div>
    );
};

export default ProfilePageHeader;
