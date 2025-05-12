import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CartIcon } from '../../../assets/icons/Icons'
import styles from './CartIconsComponent.module.css';
const CartIconsComponent = () => {
    const totalQty = useSelector(state => state.cart.totalQty);

    return (
        <Link to="/cart" className={styles.cart}>
            <CartIcon />
            {totalQty > 0 && <span className={styles.badge}>{totalQty}</span>}
        </Link>
    );
}
export default CartIconsComponent