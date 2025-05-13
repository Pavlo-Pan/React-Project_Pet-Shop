import { Link } from 'react-router-dom';
import { calcDiscountPercent } from '../../utils/mathFunc';
import { useDispatch, useSelector  } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import Btn from '../Btn/Btn'
import styles from './ProductCard.module.css';
const API_URL = import.meta.env.VITE_API_URL;
const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { id, title, price, discont_price, image } = product;
    const discountPercent = calcDiscountPercent(price, discont_price);

    const inCart = useSelector(state => Boolean(state.cart.items[id]));
    const handleToggle = () => {
        if (!inCart) {
            dispatch(addToCart({ product, quantity: 1 }));
        } else {
            dispatch(removeFromCart(id));
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.btnContainer}>
                <Btn isToggle
                    onToggle={handleToggle}
                    width="284px"
                    className={inCart? styles.active : ''}>
                    {inCart ? 'Remove from cart' : 'Add to cart'}
                </Btn>
            </div>
            <div className={styles.card}>
                <Link to={`/products/${id}`} className={styles.imageWrapper}>
                    <img src={`${API_URL}${image}`} alt={title} className={styles.img} />
                    {discountPercent && (
                        <div className={styles.discountBadge}>-{discountPercent}%</div>
                    )}
                </Link>
                <div className={styles.details}>
                    <Link to={`/products/${id}`} className={styles.title}>
                        {title}
                    </Link>
                    <div className={styles.priceWrapper}>
                        {discont_price ? (
                            <>
                                <span className={styles.price}>${discont_price}</span>
                                <span className={styles.oldPrice}>${price}</span>
                            </>
                        ) : (
                            <span className={styles.price}>${price}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
