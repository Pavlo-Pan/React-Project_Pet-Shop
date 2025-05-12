import HeadMainPage from "../../modules/HeadMainPage/HeadMainPage";
import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import Container from "../../shared/components/Container/Container";
import CategoriesSector from "../../modules/CategoriesSector/CategoriesSector";
import Register from "../../modules/Register/Register";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import ProductsSector from "../../modules/ProductSector/ProductSector";
const HomePage = () => {
    useDocumentTitle('Pet Shop');
    return (
        < >
            <HeadMainPage />
            <Container>
                <SectionTitle
                    title="Categories"
                    linkTo="/categories"
                    linkText="All categories" />
                <CategoriesSector limit={4} /></Container>
            <Container><Register /></Container>
            <Container>
                <SectionTitle
                    title="Sale"
                    linkTo="/sales"
                    linkText="All sales" />
                    <ProductsSector limit={4} discountedOnly={true} />
            </Container>
        </>
    )
}
export default HomePage;