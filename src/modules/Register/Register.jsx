import RegisterForm from "./RegisterForm/RegisterForm";
import Container from "../../shared/components/Container/Container";
import styles from './Register.module.css'
const Register = () =>{
    return(< >
        <div  className={styles.container}>
<h3 className={styles.title}>5% off on the first order</h3>
 <div  className={styles.flex}>
<img src="src\assets\images\fotoRegForm.png" alt="anim" className={styles.img}/>
    <RegisterForm className={styles.form}/>
    </div></div>
    </>)
}
export default Register