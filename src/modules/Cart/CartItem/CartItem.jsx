import CrossButton from '../../../assets/icons/CrossButton';
import Counter from '../../../shared/components/Counter/Counter'
import styles from './CartItem.module.css';

const API_URL = import.meta.env.VITE_API_URL;

const CartItem = ({ product, quantity, onQuantityChange, onRemove }) => {
    if (!product) return null;
    const { id, title, image, price, discont_price } = product;
    const unitPrice = discont_price ?? price;
    const totalPrice = unitPrice * quantity;
    const hasDiscount = discont_price != null;
    const totalOldPrice = price * quantity;

    return (
        <div className={styles.card}>
            <img
                src={`${API_URL}${image}`}
                alt={title}
                className={styles.image}
            />
            <div className={styles.cont}>
                <div className={styles.info}>
                    <div className={styles.title}>{title}</div>

                    <CrossButton
                        onClick={() => onRemove(id)}
                        style={{ marginLeft: '16px' }}
                    />
                </div>
                <div className={styles.price}>
                    <Counter qty={quantity} onChange={onQuantityChange} />
                    ${totalPrice}
                    {hasDiscount && (
                        <span className={styles.oldPrice}>${totalOldPrice}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartItem;
