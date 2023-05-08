/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    FC, ReactNode, memo,
} from 'react';
import cn from 'shared/lib/classNames';
import styles from './RadioGroup.module.scss';

export enum RadioGroupSize {
    S = 'sizeS',
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXL',
}
interface RadoiItem {
    value: any
    content: ReactNode
}

interface RadioGroupProps {
    className?: string
    size?:RadioGroupSize
    items: RadoiItem[]
    value: any
    disabled?: boolean
    onChange?: (value: any) => void
}
const RadioGroup: FC<RadioGroupProps> = (props) => {
    const {
        className,
        disabled,
        items,
        value,
        size = RadioGroupSize.M,
        onChange,
    } = props;

    const onClickHandler = (value:any) => {
        if (onChange) {
            onChange(value);
        }
    };

    if (!items.length) {
        return null;
    }

    return (
        <div className={cn(
            styles.RadioGroup,
            styles[size],
            className,
        )}
        >
            {
                items.map((item) => (
                    <button
                        key={item.value}
                        type="button"
                        disabled={disabled}
                        onClick={() => onClickHandler(item.value)}
                        className={cn(
                            styles.btn,
                            {
                                [styles.selected]: item.value === value,
                            },
                        )}
                    >
                        {item.content}
                    </button>
                ))
            }
        </div>
    );
};

export default memo(RadioGroup);
