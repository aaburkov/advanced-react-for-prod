import { useState } from 'react'
import styles from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
        <button className={styles.btn} onClick={() => setCount(prev => prev - 1)}>Убавить</button>
        <h2 className={styles.value}>{count}</h2>
        <button className={styles.btn} onClick={() => setCount(prev => prev + 1)}>Добавить</button>
    </div>
  )
}
