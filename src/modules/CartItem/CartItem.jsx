import CrossButton from '../../assets/icons/CrossButton';
import Counter from '../../shared/components/Counter/Counter'
import styles from './CartItem.module.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333';

const CartItem = ({ product, quantity, onQuantityChange, onRemove }) => {
    if (!product) return null;
    const { id, title, image, price, discont_price } = product;
    const unitPrice = discont_price ?? price;
    const totalPrice = unitPrice * quantity;
    const hasDiscount = discont_price != null;

    return (
        <div className={styles.card}>
            <img
                src={`${API_URL}${image}`}
                alt={title}
                className={styles.image}
            />
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <Counter qty={quantity} onChange={onQuantityChange} />
            </div>
            <div className={styles.price}>
                ${totalPrice}
                {hasDiscount && (
                    <span className={styles.oldPrice}>${price}</span>
                )}
            </div>
            <CrossButton
                onClick={() => onRemove(id)}
                style={{ marginLeft: '16px' }}
            />
        </div>
    );
};

export default CartItem;
