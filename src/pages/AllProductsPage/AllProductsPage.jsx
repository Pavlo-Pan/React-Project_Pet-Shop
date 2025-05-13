import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import { useFilters } from '../../shared/hooks/useFilters';
import ProductsSector from "../../modules/ProductSector/ProductSector";
import Container from "../../shared/components/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Breadcrumbs from "../../modules/BreadCrumbs/BreadCrumbs";
import FilterBar from "../../modules/FilterBar/FilterBar";
const AllProductsPage = () => {
    useDocumentTitle('All Products');
    const { filters, setFilters } = useFilters({
        priceFrom: 0,
        priceTo: Infinity,
        discounted: false,
        sortBy: 'default',
    });
    return (
        <Container>
            <Breadcrumbs />
            <SectionTitle title="All products" />
            <FilterBar
                filters={filters}
                onPriceChange={u => setFilters(u)}
                onToggleDiscounted={u => setFilters(u)}
                onSortChange={u => setFilters(u)}
            />
            <ProductsSector
                filters={filters}
            />
        </Container>
    )
}
export default AllProductsPage;