import styles from './Counter.module.css'
const Counter = ({ qty, onChange }) => (
    <div className={styles.row}>
        <button onClick={() => onChange(q => Math.max(1, q - 1))} className={styles.btn}>–</button>
        <span className={styles.value}>{qty}</span>
        <button onClick={() => onChange(q => q + 1)} className={styles.btn}>+</button>
    </div>
);

export default Counter;