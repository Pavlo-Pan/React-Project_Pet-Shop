import styles from './SortSelect.module.css';
import options from './options'
import { SelectDown } from '../../../assets/icons/Icons'
const SortSelect = ({ value, onChange, label }) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.text}>{label}</span>
            <select
                className={styles.select}
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <span className={styles.arrow}><SelectDown /></span>
        </div>
    );
};

export default SortSelect;