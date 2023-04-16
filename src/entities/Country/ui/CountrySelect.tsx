/* eslint-disable @typescript-eslint/no-empty-function */
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'shared/lib/classNames';
import { AppSelect } from 'shared/ui';
import { Countries } from '../model/types/countries';

interface CountrySelectProps {
    className?: string,
    readOnly?: boolean,
    value?: Countries,
    onChange?: (value: Countries) => void
}

const options = [
    { value: Countries.Russia },
    { value: Countries.Armenia },
    { value: Countries.Ukraine },
    { value: Countries.Belarus },
    { value: Countries.Germany },
];

const CountrySelect:FC<CountrySelectProps> = (props) => {
    const {
        className, readOnly, value, onChange,
    } = props;
    const { t } = useTranslation();

    const changeHandler = useCallback((value: string) => {
        onChange?.(value as Countries);
    }, []);

    return (
        <AppSelect
            value={value}
            onChange={changeHandler}
            options={options}
            label={t('Select country')}
            className={cn(className)}
            readOnly={readOnly}
        />
    );
};

export default memo(CountrySelect);
