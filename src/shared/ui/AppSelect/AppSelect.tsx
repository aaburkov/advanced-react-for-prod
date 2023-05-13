import {
    ChangeEvent, FC, memo, useMemo,
} from 'react';
import cn from 'shared/lib/classNames';
import styles from './AppSelect.module.scss';

export interface SelectOption<T extends string> {
    value: T
    content?: string
}
interface AppSelectProps<T extends string> {
    className?: string
    readOnly?: boolean
    label?: string
    options?: SelectOption<T>[]
    value?: string
    onChange?: (value: T) => void
}

const AppSelect = <T extends string>(props:AppSelectProps<T>) => {
    const {
        className,
        readOnly,
        label,
        options,
        value,
        onChange,
    } = props;

    const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value as T);
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            key={opt.value}
            value={opt.value}
            className={styles.option}
        >
            {opt.content ? opt.content : opt.value}
        </option>
    )), [options]);
    return (
        <div className={cn(styles.AppSelect, className)}>
            {
                label && (
                    <span className={styles.label}>{`${label}>`}</span>
                )
            }
            <select
                disabled={readOnly}
                value={value}
                onChange={changeHandler}
                className={styles.select}
            >
                {optionsList}
            </select>
        </div>
    );
};

export default memo(AppSelect) as typeof AppSelect;
