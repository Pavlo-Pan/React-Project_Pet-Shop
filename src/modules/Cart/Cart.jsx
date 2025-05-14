import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import CartItem from './CartItem/CartItem';
import EmptyCart from './EmptyCart/EmptyCart';
import FlexLayout from '../layouts/FlexLayout/FlexLayout';
import OrderDetails from './OrderDetails/OrderDetails';
import ModaleWindow from './ModaleWindow/ModaleWindow';
import {
    removeFromCart,
    incrementQty,
    decrementQty,
    clearCart,
} from '../../shared/store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const totalQty = useSelector(state => state.cart.totalQty);
    const totalPrice = Object.values(items)
        .reduce((sum, { product, qty }) => {
            const unitPrice = product.discont_price ?? product.price;
            return sum + unitPrice * qty;
        }, 0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (totalQty === 0) return <EmptyCart />;

    const handleOrderClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        dispatch(clearCart());
    };

    return (
        <FlexLayout>
            <ul style={{ listStyle: 'none'}}>
                {Object.values(items).map(({ product, qty }) => (
                    <li key={product.id}>
                        <CartItem
                            product={product}
                            quantity={qty}
                            onQuantityChange={newQty => {
                                if (newQty > qty) {
                                    dispatch(incrementQty(product.id));
                                } else {
                                    dispatch(decrementQty(product.id));
                                }
                            }}
                            onRemove={id => dispatch(removeFromCart(id))}
                        />
                    </li>
                ))}
            </ul>
            <OrderDetails
                total={totalPrice}
                itemsCount={totalQty}
                onOrder={handleOrderClick}
            />
            <ModaleWindow
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </FlexLayout>
    );
};

export default Cart;