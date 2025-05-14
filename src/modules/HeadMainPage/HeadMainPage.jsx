import { Link } from 'react-router-dom';
import Btn from '../../shared/components/Btn/Btn';
import styles from './HeadMainPage.module.css'
const HeadMainPage = () =>{
    return(
    <div className={styles.container}>
        <div className={styles.inner}>
    <h1 className={styles.title}>Amazing Discounts <br/>on Pets Products!</h1>
    <div className={styles.link}><Link to='/sales' ><Btn>Check out</Btn></Link> </div>
    
    </div></div>
    )
}
export default HeadMainPage;