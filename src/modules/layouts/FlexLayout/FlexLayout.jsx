import styles from './FlexLayout.module.css'
const FlexLayout = ({children}) =>{
    return <div className={styles.flex}>{children}</div>
}
export default FlexLayout