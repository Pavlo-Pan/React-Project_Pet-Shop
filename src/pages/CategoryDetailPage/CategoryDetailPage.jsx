import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import { fetchCategory, clearDetail } from '../../shared/store/categorieSlice'
import ProductCard from "../../shared/components/ProductCard.jsx/ProductCard";
import Container from "../../shared/components/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import FlexLayout from "../../modules/layouts/FlexLayout/FlexLayout";
import Breadcrumbs from "../../modules/BreadCrumbs/BreadCrumbs";
const CategoryDetailPage = () => {
    
    const { id } = useParams();
    const dispatch = useDispatch();

    const {
        detail: category,
        products,
        detailStatus: status,
        detailError: error,
    } = useSelector(state => state.categories);
    useEffect(() => {
        dispatch(fetchCategory(id));
        return () => { dispatch(clearDetail()); };
    }, [dispatch, id]);
useDocumentTitle(category?.title || "Loading…");

    if (status === 'loading') return <p>Loading…</p>;
    if (status === 'failed') return <p>Error: {error}</p>;
    
    return (
        <>
                <Container>
                    <Breadcrumbs/>
            {category && <SectionTitle title={category.title} />}
                <FlexLayout>{products.map(prod => (
                <ProductCard key={prod.id} product={prod} />
            ))}</FlexLayout>
            
        </Container>
        </>

    )
}
export default CategoryDetailPage;