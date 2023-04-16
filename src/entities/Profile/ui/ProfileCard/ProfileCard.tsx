import { FC, useCallback } from 'react';
import cn from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import {
    CodeInput, Text, TextAlign, TextTheme,
    Avatar,
} from 'shared/ui';
import { IProfile } from 'entities/Profile/model/types/profile';
import { StripesLoader } from 'shared/ui/Loaders';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Countries, CountrySelect } from 'entities/Country';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string,
    data?: IProfile,
    error?: string,
    isLoading?: boolean,
    isReadonly?: boolean,
    onChangeName?: (v: string) => void,
    onChangeSurname?: (v: string) => void,
    onChangeAge?: (v: string) => void,
    onChangeCity?: (v: string) => void,
    onChangeUsername?: (v: string) => void,
    onChangeAvatar?: (v: string) => void,
    onChangeCurrency?: (v: Currency) => void,
    onChangeCountry?: (v: Countries) => void,
}

const ProfileCard:FC<ProfileCardProps> = (props) => {
    const {
        className, data, error, isLoading, isReadonly,
        onChangeName,
        onChangeSurname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={cn(styles.ProfileCard, styles.loading, className)}>
                <StripesLoader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={cn(styles.ProfileCard, styles.error, className)}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Loading profile error')}
                    text={t('Try to reload page')}
                />
            </div>
        );
    }

    return (
        <div className={cn(styles.ProfileCard, {
            [styles.editing]: !isReadonly,
        }, className)}
        >
            <div className={styles.data}>
                {
                    data?.avatar && (
                        <div className={styles.avatarWrapper}>
                            <Avatar src={data?.avatar} />
                        </div>
                    )
                }
                <CodeInput
                    value={data?.name}
                    onChange={onChangeName}
                    placeholder={t('Your name')}
                    className={styles.input}
                    readOnly={isReadonly}
                />
                <CodeInput
                    value={data?.surname}
                    onChange={onChangeSurname}
                    placeholder={t('Your surname')}
                    className={styles.input}
                    readOnly={isReadonly}
                />
                <CodeInput
                    value={data?.username}
                    onChange={onChangeUsername}
                    placeholder={t('Your username')}
                    className={styles.input}
                    readOnly={isReadonly}
                />
                <CodeInput
                    value={data?.avatar}
                    onChange={onChangeAvatar}
                    placeholder={t('Avatar link')}
                    className={styles.input}
                    readOnly={isReadonly}
                />
                <CodeInput
                    value={data?.age}
                    type="number"
                    onChange={onChangeAge}
                    placeholder={t('Your age')}
                    className={styles.input}
                    readOnly={isReadonly}
                />
                <CountrySelect
                    value={data?.country}
                    className={styles.input}
                    onChange={onChangeCountry}
                    readOnly={isReadonly}
                />
                <CodeInput
                    value={data?.city}
                    onChange={onChangeCity}
                    placeholder={t('Your city')}
                    className={styles.input}
                    readOnly={isReadonly}
                />
                <CurrencySelect
                    value={data?.currency}
                    className={styles.input}
                    onChange={onChangeCurrency}
                    readOnly={isReadonly}
                />
            </div>
        </div>
    );
};

export default ProfileCard;
