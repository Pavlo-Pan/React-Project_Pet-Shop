import styles from './Counter.module.css'
const Counter = ({ qty, onChange }) => (
    <div className={styles.row}>
        <button
            className={styles.btn}
            onClick={() => onChange(Math.max(1, qty - 1))}
        >
            –
        </button>
        <span className={styles.value}>{qty}</span>
        <button
            className={styles.btn}
            onClick={() => onChange(qty + 1)}
        >
            +
        </button>
    </div>
);
export default Counter;