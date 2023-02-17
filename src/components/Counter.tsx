import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Counter.module.scss';

export function Counter() {
    const [count, setCount] = useState(0);
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <button type="button" className={styles.btn} onClick={() => setCount((prev) => prev - 1)}>{t('Increase')}</button>
            <h2 className={styles.value}>{count}</h2>
            <button type="button" className={styles.btn} onClick={() => setCount((prev) => prev + 1)}>{t('Decrease')}</button>
        </div>
    );
}
