import {
    memo, useCallback, useMemo,
} from 'react';
import cn from 'shared/lib/classNames';
import styles from './CheckboxGroup.module.scss';
import Card, { CardTheme } from '../Card/Card';

export interface CheckboxItem<T extends string> {
    value: T
    content?: string
}
interface CheckboxGroupProps<T extends string> {
    className?: string
    readOnly?: boolean
    label?: string
    items?: CheckboxItem<T>[]
    value?: T[]
    onChange?: (value: T[]) => void
}

const CheckboxGroup = <T extends string>(props:CheckboxGroupProps<T>) => {
    const {
        className,
        readOnly,
        label,
        items,
        value = [],
        onChange,
    } = props;

    const clickHandler = useCallback((item: T) => () => {
        if (readOnly) return;

        let cloneValue = [...value];
        if (cloneValue.includes(item)) {
            cloneValue = cloneValue.filter((val) => val !== item);
        } else {
            cloneValue.push(item);
        }
        onChange?.(cloneValue);
    }, [onChange, readOnly, value]);

    const checkboxList = useMemo(() => items?.map((opt) => (
        <Card
            key={opt.value}
            theme={CardTheme.OUTLINE}
            onClick={clickHandler(opt.value)}
            className={cn(
                styles.item,
                {
                    [styles.active]: value.includes(opt.value),
                    [styles.disabled]: readOnly,
                },
            )}
        >
            {opt.content ? opt.content : opt.value}
        </Card>
    )), [clickHandler, items, readOnly, value]);
    return (
        <div className={cn(styles.CheckboxGroup, className)}>
            {
                label && (
                    <span className={styles.label}>{`${label}>`}</span>
                )
            }
            <div
                className={styles.checkboxWrapper}
            >
                {checkboxList}
            </div>
        </div>
    );
};

export default memo(CheckboxGroup) as typeof CheckboxGroup;
