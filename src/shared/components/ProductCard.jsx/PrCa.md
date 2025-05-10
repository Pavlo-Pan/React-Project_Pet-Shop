import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
const dispatch = useDispatch();
const { id, title, price, discont_price, image } = product;

const finalPrice = discont_price ?? price;
const discountPercent = discont_price
? Math.round((1 - discont_price / price) \* 100)
: null;

const handleAdd = () => {
dispatch(addToCart(product));
};

return (
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
<span className={styles.oldPrice}>${price}</span>
              <span className={styles.price}>${discont_price}</span>
</>
) : (
<span className={styles.price}>${price}</span>
)}
</div>
<button className={styles.button} onClick={handleAdd}>
Add to cart
</button>
</div>
</div>
);
};

export default ProductCard;
