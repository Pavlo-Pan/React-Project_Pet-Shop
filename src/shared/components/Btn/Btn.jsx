import styles from './Btn.module.css'

const Btn = ({children, type= "button", width = "auto", ...props}) =>{
    return <button type={type} style={{ width }} {...props}  className={styles.btn}>{children}</button>
}
export default Btn