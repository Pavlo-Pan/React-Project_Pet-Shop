import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFilters } from '../../shared/hooks/useFilters';
import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import { fetchCategory, clearDetail } from '../../shared/store/categorieSlice'
import ProductCard from "../../shared/components/ProductCard.jsx/ProductCard";
import Container from "../../shared/components/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import FlexLayout from "../../modules/layouts/FlexLayout/FlexLayout";
import Breadcrumbs from "../../modules/BreadCrumbs/BreadCrumbs";
import FilterBar from '../../modules/FilterBar/FilterBar';
import { getFinalPrice } from '../../shared/utils/mathFunc';
const CategoryDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { detail: category, products, detailStatus: status, detailError: error } =
        useSelector(state => state.categories);

    useEffect(() => {
        dispatch(fetchCategory(id));
        return () => { dispatch(clearDetail()); };
    }, [dispatch, id]);

    useDocumentTitle(category?.title || 'Loading…');

    const { filters, setFilters } = useFilters({
        priceFrom: 0,
        priceTo: Infinity,
        discounted: false,
        sortBy: 'default',
    });
    const { priceFrom, priceTo, discounted, sortBy } = filters;

    if (status === 'loading') return <p>Loading…</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    let displayed = products
        .filter(p => {
            const final = getFinalPrice(p.price, p.discont_price);
            return final >= priceFrom && final <= priceTo;
        })
        .filter(p => !discounted || p.discont_price != null);

    if (sortBy === 'newest') {
        displayed = displayed.slice().sort((a, b) =>
            new Date(b.createdAt) - new Date(a.createdAt)
        );
    } else if (sortBy === 'priceDesc') {
        displayed = displayed.slice().sort((a, b) =>
            getFinalPrice(b.price, b.discont_price)
            - getFinalPrice(a.price, a.discont_price)
        );
    } else if (sortBy === 'priceAsc') {
        displayed = displayed.slice().sort((a, b) =>
            getFinalPrice(a.price, a.discont_price)
            - getFinalPrice(b.price, b.discont_price)
        );
    }

    return (
        <Container>
            <Breadcrumbs />

            {category && <SectionTitle title={category.title} />}

            <FilterBar
                filters={filters}
                onPriceChange={u => setFilters(u)}
                onToggleDiscounted={u => setFilters(u)}
                onSortChange={u => setFilters(u)}
            />

            <FlexLayout>
                {displayed.map(prod => (
                    <ProductCard key={prod.id} product={prod} />
                ))}
            </FlexLayout>
        </Container>
    );
};

export default CategoryDetailPage;