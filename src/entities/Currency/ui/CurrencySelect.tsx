/* eslint-disable @typescript-eslint/no-empty-function */
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'shared/lib/classNames';
import { AppSelect } from 'shared/ui';
import { Currency } from '../model/types/currencies';

interface CurrencySelectProps {
    className?: string,
    readOnly?: boolean,
    value?: Currency,
    onChange?: (value: Currency) => void
}

const options = [
    { value: Currency.RUB },
    { value: Currency.USD },
    { value: Currency.EUR },
];

const CurrencySelect:FC<CurrencySelectProps> = (props) => {
    const {
        className, readOnly, value, onChange,
    } = props;
    const { t } = useTranslation();

    const changeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, []);

    return (
        <AppSelect
            value={value}
            onChange={changeHandler}
            options={options}
            label={t('Select currency')}
            className={cn(className)}
            readOnly={readOnly}
        />
    );
};

export default memo(CurrencySelect);
