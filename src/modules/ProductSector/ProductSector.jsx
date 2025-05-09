import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../shared/store/productsSlice';
import ProductCard from '../../shared/components/ProductCard.jsx/ProductCard';
import styles from './ProductsSector.module.css';


const ProductsSector = ({ limit, discountedOnly = false }) => {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector(state => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Loading products…</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  
  let displayedProducts = products;

  
  if (discountedOnly) {
    displayedProducts = displayedProducts.filter(p => p.discont_price != null);
  }


  if (typeof limit === 'number') {
    displayedProducts = displayedProducts.slice(0, limit);
  }

  return (
    <div className={styles.flex}>
      {displayedProducts.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductsSector;
