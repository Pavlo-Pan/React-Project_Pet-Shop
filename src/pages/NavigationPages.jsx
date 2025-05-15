import { Suspense, lazy } from 'react'
import { Routes, Route } from "react-router-dom"
import LoadingSpinner from '../shared/components/LoadingSpinner/LoadingSpinner.jsx'

/* import HomePage from "./HomePage/HomePage.jsx"
import CategoriesPage from "./CategoriesPage/CategoriesPage"
import CategoryDetailPage from "./CategoryDetailPage/CategoryDetailPage"
import AllProductsPage from "./AllProductsPage/AllProductsPage"
import DiscountedItemsPage from "./DiscountedItemsPage/DiscountedItemsPage"
import ProductPage from "./ProductPage/ProductPage"
import CartPage from "./CartPage/CartPage"
import NotFoundPage from "./NotFoundPage/NotFoundPage" */

const HomePage = lazy(() => import('./HomePage/HomePage'));
const CategoriesPage = lazy(() => import('./CategoriesPage/CategoriesPage'));
const CategoryDetailPage = lazy(() => import('./CategoryDetailPage/CategoryDetailPage'));
const AllProductsPage = lazy(() => import('./AllProductsPage/AllProductsPage'));
const DiscountedItemsPage = lazy(() => import('./DiscountedItemsPage/DiscountedItemsPage'));
const ProductPage = lazy(() => import('./ProductPage/ProductPage'));
const CartPage = lazy(() => import('./CartPage/CartPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));

const NavigationPages = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:id" element={<CategoryDetailPage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/sales" element={<DiscountedItemsPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
    )
}
export default NavigationPages;