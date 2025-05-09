import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import ProductsSector from "../../modules/ProductSector/ProductSector";
import Container from "../../shared/components/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
const DiscountedItemsPage = () => {
    useDocumentTitle('Pet Shop - Discount');
    return (
        <Container>
            <SectionTitle title="Discounted items" />
            <ProductsSector discountedOnly={true} />
        </Container>
    )
}
export default DiscountedItemsPage;
