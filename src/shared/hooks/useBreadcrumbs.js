import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function useBreadcrumbs() {
    const location = useLocation();
    const params = useParams();
    const { list: categoryList } = useSelector(s => s.categories);
    const { items: allProducts, currentProduct } = useSelector(s => s.products);

    const segments = location.pathname.split('/').filter(Boolean);

    const crumbs = [{ name: 'Main page', to: '/' }];

    if (segments[0] === 'categories') {
        crumbs.push({ name: 'Categories', to: '/categories' });
        if (params.id) {
            const cat = categoryList.find(c => String(c.id) === params.id);
            if (cat) crumbs.push({ name: cat.title, to: `/categories/${params.id}` });
        }
    }
    else if (segments[0] === 'products') {
        if (params.id) {
            crumbs.push({ name: 'Categories', to: '/categories' });
            const prod = allProducts.find(p => String(p.id) === params.id) || currentProduct;
            if (prod && prod.categoryId != null) {
                const cat = categoryList.find(c => c.id === prod.categoryId);
                if (cat) {
                    crumbs.push({ name: cat.title, to: `/categories/${cat.id}` });
                }
            }
            if (prod) {
                crumbs.push({ name: prod.title, to: `/products/${params.id}` });
            }
        } else {
            crumbs.push({ name: 'All products', to: '/products' });
        }
    }
    else if (segments[0] === 'sales') {
        crumbs.push({ name: 'All sales', to: '/sales' });
    }

    return crumbs;
}
