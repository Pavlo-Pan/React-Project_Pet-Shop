
import OrdersForm from '../OrdersForm/OrdersForm';
import styles from './OrderDetails.module.css';

const OrderDetails = ({ itemsCount = 3, total = '97.00' }) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Order details</h2>
            <p className={styles.sub}>{itemsCount} items</p>
            <div className={styles.total}>
                <span className={styles['total-label']}>Total</span>
                <span className={styles['total-value']}>${total}</span>
            </div>
            <OrdersForm />
        </div>
    );
};

export default OrderDetails;
