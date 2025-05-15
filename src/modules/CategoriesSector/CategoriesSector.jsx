import { useEffect } from 'react';
import CategoryCard from '../../shared/components/CategoryCard/CategoryCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../shared/store/categorieSlice';
import SkeletonCard from '../../shared/components/SkeletonCard/SkeletonCard';
import FlexLayout from '../layouts/FlexLayout/FlexLayout';

const CategoriesSector = ({ limit }) => {
    const dispatch = useDispatch();
    const {
        list: categories,
        listStatus: status,
        listError: error
    } = useSelector(state => state.categories);


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
        }
    }, [dispatch, status]);

    if (status === 'loading') return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            padding: '16px',
        }}>
            {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} />
            ))}
        </div>
    );;
    if (status === 'failed') return <p>Error: {error}</p>;

    const toRender = typeof limit === 'number'
        ? categories.slice(0, limit)
        : categories;

    return (


        <FlexLayout>
            {toRender.map(cat => (
                <CategoryCard key={cat.id} category={cat} />
            ))}
        </FlexLayout>

    );
};

export default CategoriesSector;
