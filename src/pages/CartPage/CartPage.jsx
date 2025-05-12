import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import Container from "../../shared/components/Container/Container";
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle'
const CartPage = () =>{
    useDocumentTitle('Cart');
    return(
        <Container>
        <SectionTitle title='Shopping cart' linkTo='/categories' linkText='Back to the store'/>

        </Container>
    )
}

export default CartPage;