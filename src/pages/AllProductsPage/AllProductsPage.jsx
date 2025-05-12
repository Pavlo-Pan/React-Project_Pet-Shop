import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import ProductsSector from "../../modules/ProductSector/ProductSector";
import Container from "../../shared/components/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Breadcrumbs from "../../modules/BreadCrumbs/BreadCrumbs";
const AllProductsPage = () => {
    useDocumentTitle('All Products');
    return (
        <Container>
            <Breadcrumbs/>
            <SectionTitle title="All products" />
            <ProductsSector/>
        </Container>
    )
}
export default AllProductsPage;