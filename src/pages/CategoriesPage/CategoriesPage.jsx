import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import Container from "../../shared/components/Container/Container";
import CategoriesSector from "../../modules/CategoriesSector/CategoriesSector";
const CategoriesPage = () => {
    useDocumentTitle('Pet Shop - Categories');
    return (
        <Container>
            <CategoriesSector />
        </Container>
    )
}
export default CategoriesPage;