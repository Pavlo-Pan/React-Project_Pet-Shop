import styles from './CustomCheckbox.module.css';
import { CheckItem } from '../../../assets/icons/Icons';

const CustomCheckbox = ({ checked, onChange, label }) => (
    <label className={styles.wrapper}>
        <span className={styles.text}>{label}</span>
        <input
            type="checkbox"
            checked={checked}
            onChange={e => onChange(e.target.checked)}
            className={styles.input}
        />
        <span className={styles.box}>
            <CheckItem className={styles.check} />
        </span>
    </label>
);

export default CustomCheckbox;
