import styles from './ModaleWindow.module.css'
import CrossButton from '../../../assets/icons/CrossButton'
const ModaleWindow = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className={styles.overlay} aria-modal="true" role="dialog">
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Congratulations!</h2>
                    <CrossButton onClick={onClose} color='#fff' width='22px' height='22px'/>
                </div>
                <div ><p className={styles.content}>Your order has been successfully placed on the website. </p>
                <p className={styles.content}>A manager will contact you shortly to confirm your order.</p></div>
            </div>
        </div>
    )
}
export default ModaleWindow