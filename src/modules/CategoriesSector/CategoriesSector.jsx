// modules/CategoriesSector/CategoriesSector.jsx
import { useEffect } from 'react';
import CategoryCard from '../../shared/components/CategoryCard/CategoryCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../shared/store/categoriesListSlice';
import FlexLayout from '../layouts/FlexLayout/FlexLayout';

const CategoriesSector = ({ limit }) => {
    const dispatch = useDispatch();
    const { items: categories, status, error } = useSelector(
        state => state.categoriesList
    );

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
        }
    }, [dispatch, status]);

    if (status === 'loading') return <p>Loading</p>;
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
