import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../shared/store/productsSlice';
import ProductCard from '../../shared/components/ProductCard.jsx/ProductCard';
import FlexLayout from '../layouts/FlexLayout/FlexLayout';
import { getFinalPrice } from '../../shared/utils/mathFunc';
const ProductsSector = ({
  limit,
  discountedOnly = false,
  filters = {}
}) => {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector(state => state.products);

  const {
    priceFrom = 0,
    priceTo = Infinity,
    discounted = false,
    sortBy = 'default',
  } = filters;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Loading products…</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  let list = products
    .filter(p => {
      const final = getFinalPrice(p.price, p.discont_price);
      return final >= priceFrom && final <= priceTo;
    })
    .filter(p => discountedOnly
      ? p.discont_price != null
      : (!discounted || p.discont_price != null)
    );

  if (sortBy === 'newest') {
    list = list.slice().sort((a, b) =>
      new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else if (sortBy === 'priceDesc') {
    list = list.slice().sort((a, b) =>
      getFinalPrice(b.price, b.discont_price) - getFinalPrice(a.price, a.discont_price)
    );
  } else if (sortBy === 'priceAsc') {
    list = list.slice().sort((a, b) =>
      getFinalPrice(a.price, a.discont_price) - getFinalPrice(b.price, b.discont_price)
    );
  }

  if (typeof limit === 'number') {
    list = list.slice(0, limit);
  }

  return (
    <FlexLayout>
      {list.map(p => <ProductCard key={p.id} product={p} />)}
    </FlexLayout>
  );
};

export default ProductsSector;