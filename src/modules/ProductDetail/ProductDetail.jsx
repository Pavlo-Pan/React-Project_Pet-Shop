import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../shared/store/cartSlice'
import { fetchProductById, clearCurrentProduct } from '../../shared/store/productsSlice'
import Counter from '../../shared/components/Counter/Counter'
import ImageGalery from './ImageGalery/ImageGalery'
import PriceInfo from './PriceInfo/PriceInfo'
import Descriptions from './Descriptions/Descriptions'
import Btn from '../../shared/components/Btn/Btn'
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs'
import styles from './ProductDetail.module.css'
import { useDocumentTitle } from '../../shared/hooks/useDocumentTitle'
const ProductDetail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { currentProduct: product, status, error } = useSelector(
        state => state.products
    )
    const [qty, setQty] = useState(1)

    useEffect(() => {
        dispatch(fetchProductById(id))
        return () => {
            dispatch(clearCurrentProduct())
        }
    }, [dispatch, id])
    useDocumentTitle(product?.title || "Loading…");
    if (status === 'loading') return <p>Loading…</p>
    if (status === 'failed') return <p>Error: {error}</p>
    if (!product) return null

    const imgs = [product.image, ...(product.images || [])]

    const handleAdd = () => {
        dispatch(addToCart({ product, quantity: qty }))
        setQty(1);
    }

    return (
        <div>
            < Breadcrumbs />
            <div className={styles.wrapper}>
                <ImageGalery images={imgs} />
                <div className={styles.details}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <PriceInfo
                        price={product.price}
                        discont_price={product.discont_price}
                    />
                    <div className={styles.counBtn}>
                        <Counter qty={qty} onChange={setQty} />
                        <Btn onClick={handleAdd}>
                            Add to cart
                        </Btn>
                    </div>

                    <Descriptions text={product.description} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
