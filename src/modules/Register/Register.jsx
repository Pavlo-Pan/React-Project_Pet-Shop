import RegisterForm from "./RegisterForm/RegisterForm";
import styles from './Register.module.css'
const Register = () => {
    return (< >
        <div className={styles.container}>
            <h3 className={styles.title}>5% off on the first order</h3>
            <div className={styles.flex}>
                <div className={styles.img}></div>
                <RegisterForm className={styles.form} />
            </div></div>
    </>)
}
export default Register