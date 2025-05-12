import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import Container from "../../shared/components/Container/Container";
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle'
import FlexLayout from '../../modules/layouts/FlexLayout/FlexLayout'
import Cart from "../../modules/Cart/Cart";


const CartPage = () => {
    useDocumentTitle('Cart');
    return (
        <Container>
            <SectionTitle title='Shopping cart' linkTo='/categories' linkText='Back to the store' />
            <FlexLayout>
            <Cart/>
            </FlexLayout>
        </Container>
    )
}

export default CartPage;