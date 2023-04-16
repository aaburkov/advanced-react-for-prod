/* eslint-disable i18next/no-literal-string */
import {
    FC, InputHTMLAttributes, memo, useEffect, useMemo, useRef, useState,
} from 'react';
import cn from 'shared/lib/classNames';
import styles from './CodeInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface CodeInputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value:string) => void
    autofocus?: boolean
}
const CodeInput: FC<CodeInputProps> = (props) => {
    const {
        className,
        type = 'text',
        value,
        onChange,
        placeholder,
        autofocus,
        ...otherProps
    } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        // setCaretPosition(e.target.value.length);
    };
    const isCaretVisible = useMemo(
        () => isFocused && !otherProps.readOnly,
        [isFocused, otherProps.readOnly],
    );
    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus();
        }
    }, [autofocus]);
    return (
        <div className={cn(styles.CodeInput, className)}>
            {
                placeholder && (
                    <div className={styles.placeholder}>
                        {placeholder}
                        {' '}
                        &gt;
                    </div>
                )
            }
            <div className={styles.caretWrapper}>
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={styles.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {
                    isCaretVisible
                        && (
                            <span
                                style={{ left: caretPosition * 9.6 }}
                                className={styles.caret}
                            />
                        )
                }
            </div>
        </div>
    );
};

export default memo(CodeInput);
