import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import ProductsSector from "../../modules/ProductSector/ProductSector";
import Container from "../../shared/components/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Breadcrumbs from "../../modules/BreadCrumbs/BreadCrumbs";
const DiscountedItemsPage = () => {
    useDocumentTitle('Discount');
    return (
        <Container>
            <Breadcrumbs/>
            <SectionTitle title="Discounted items" />
            <ProductsSector discountedOnly={true} />
        </Container>
    )
}
export default DiscountedItemsPage;
