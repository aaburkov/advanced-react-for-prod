import {
    ChangeEvent, FC, memo, useMemo,
} from 'react';
import cn from 'shared/lib/classNames';
import styles from './AppSelect.module.scss';

export interface SelectOption {
    value: string
    content?: string
}
interface AppSelectProps {
    className?: string
    readOnly?: boolean
    label?: string
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
}

const AppSelect: FC<AppSelectProps> = (props) => {
    const {
        className,
        readOnly,
        label,
        options,
        value,
        onChange,
    } = props;

    const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value);
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

export default memo(AppSelect);
