import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import Container from "../../shared/components/Container/Container";
import CategoriesSector from "../../modules/CategoriesSector/CategoriesSector";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Breadcrumbs from "../../modules/BreadCrumbs/BreadCrumbs";
const CategoriesPage = () => {
    useDocumentTitle('Categories');
    return (
        <Container>
            <Breadcrumbs/>
            <SectionTitle title='Categories'/>
            <CategoriesSector />
        </Container>
    )
}
export default CategoriesPage;