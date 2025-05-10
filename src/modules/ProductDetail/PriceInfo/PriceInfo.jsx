import styles from './PriceInfo.module.css';
import { calcDiscountPercent, getFinalPrice } from '../../../shared/utils/mathFunc';

const PriceInfo = ({ price, discont_price }) => {

    const final = getFinalPrice(price, discont_price);
    const percent =  calcDiscountPercent(price, discont_price)

    return (
        <div className={styles.row}>
            
            <span className={styles.current}>${final}</span>
            {percent && (
                <>
                    <span className={styles.old}>${price}</span>
                    <span className={styles.badge}>-{percent}%</span>
                </>
            )}
            
        </div>
    );
};

export default PriceInfo;