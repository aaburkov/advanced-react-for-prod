/* eslint-disable @typescript-eslint/no-empty-function */
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'shared/lib/classNames';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Counter.module.scss';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValues } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string
}
const Counter:FC<CounterProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValues);
    const inc = () => {
        dispatch(counterActions.increment());
    };
    const dec = () => {
        dispatch(counterActions.decrement());
    };
    const addAmount = (value:number) => {
        dispatch(counterActions.incrementByAmount(value));
    };
    return (
        <div className={cn(styles.Counter, className)}>
            <button
                data-testid="decrement-btn"
                type="button"
                className={styles.btn}
                onClick={dec}
            >
                {t('Decrease')}
            </button>
            <h2 data-testid="value-title" className={styles.value}>{counterValue}</h2>
            <button
                data-testid="increment-btn"
                type="button"
                className={styles.btn}
                onClick={inc}
            >
                {t('Increase')}
            </button>
            <button
                data-testid="increment-by-amount-btn"
                type="button"
                className={styles.btn}
                onClick={() => addAmount(Number(prompt()))}
            >
                {t('Add amount')}
            </button>
        </div>
    );
};

export default Counter;
