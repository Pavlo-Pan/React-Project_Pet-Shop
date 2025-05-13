import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import ProductsSector from "../../modules/ProductSector/ProductSector";
import { useFilters } from "../../shared/hooks/useFilters";
import Container from "../../shared/components/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import Breadcrumbs from "../../modules/BreadCrumbs/BreadCrumbs";
import FilterBar from "../../modules/FilterBar/FilterBar";
const DiscountedItemsPage = () => {
    useDocumentTitle('Discount');
    const { filters, setFilters } = useFilters({
        priceFrom: 0,
        priceTo: Infinity,
        discounted: false,   
        sortBy: "default",
    });
    return (
        <Container>
            <Breadcrumbs />
            <SectionTitle title="Discounted items" />
            <FilterBar
                filters={filters}
                discountedOnly={true}
                onPriceChange={u => setFilters(u)}
                onToggleDiscounted={u => setFilters(u)}  
                onSortChange={u => setFilters(u)}
            />
            <ProductsSector discountedOnly={true} filters={filters} />
        </Container>
    )
}
export default DiscountedItemsPage;
