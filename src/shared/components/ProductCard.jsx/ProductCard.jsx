
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {

    const { id, title, price, discont_price, image } = product;


    const discountPercent = discont_price
        ? Math.round((1 - discont_price / price) * 100)
        : null;



    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Link to={`/products/${id}`} className={styles.imageWrapper}>
                    <img src={image} alt={title} className={styles.img} />
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
