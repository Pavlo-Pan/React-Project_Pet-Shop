import { Routes, Route } from "react-router-dom"
import HomePage from "./HomePage/HomePage.jsx"
import CategoriesPage from "./CategoriesPage/CategoriesPage"
import CategoryDetailPage from "./CategoryDetailPage/CategoryDetailPage"
import AllProductsPage from "./AllProductsPage/AllProductsPage"
import DiscountedItemsPage from "./DiscountedItemsPage/DiscountedItemsPage"
import ProductPage from "./ProductPage/ProductPage"
import CartPage from "./CartPage/CartPage"
import NotFoundPage from "./NotFoundPage/NotFoundPage"

const NavigationPages = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:id" element={<CategoryDetailPage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/discount" element={<DiscountedItemsPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
export default NavigationPages;