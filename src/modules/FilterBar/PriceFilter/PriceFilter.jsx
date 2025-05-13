import styles from './PriceFilter.module.css';

const PriceFilter = ({ priceFrom, priceTo, onChange }) => {
    const handleFrom = e => {
        const from = e.target.value !== '' ? Number(e.target.value) : 0;
        onChange(from, priceTo);
    };

    const handleTo = e => {
        const to = e.target.value !== '' ? Number(e.target.value) : Infinity;
        onChange(priceFrom, to);
    };

    return (
        <div className={styles.wrapper}>
            <span className={styles.label}>Price</span>
            <input
                type="number"
                placeholder="from"
                className={styles.input}
                value={priceFrom === 0 ? '' : priceFrom}
                onChange={handleFrom}
            />
            <input
                type="number"
                placeholder="to"
                className={styles.input}
                value={isFinite(priceTo) ? priceTo : ''}
                onChange={handleTo}
            />
        </div>
    );
};

export default PriceFilter;