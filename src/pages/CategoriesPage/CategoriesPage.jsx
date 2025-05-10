import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import Container from "../../shared/components/Container/Container";
import CategoriesSector from "../../modules/CategoriesSector/CategoriesSector";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
const CategoriesPage = () => {
    useDocumentTitle('Categories');
    return (
        <Container>
            <SectionTitle title='Categories'/>
            <CategoriesSector />
        </Container>
    )
}
export default CategoriesPage;