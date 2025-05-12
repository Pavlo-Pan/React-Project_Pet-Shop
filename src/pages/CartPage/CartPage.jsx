import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import Container from "../../shared/components/Container/Container";
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle'
import EmptyCart from "../../modules/EmptyCart/EmptyCart";
import OrderDetails from "../../modules/OrderDetails/OrderDetails";
import FlexLayout from '../../modules/layouts/FlexLayout/FlexLayout'
import CartItem from "../../modules/CartItem/CartItem";

const CartPage = () => {
    useDocumentTitle('Cart');
    return (
        <Container>
            <SectionTitle title='Shopping cart' linkTo='/categories' linkText='Back to the store' />
            <FlexLayout>
                <CartItem/>
                <OrderDetails />
            </FlexLayout>
        </Container>
    )
}

export default CartPage;