import styles from './EmptyCart.module.css'
import { Link } from 'react-router-dom'
import Btn from '../../shared/components/Btn/Btn'
const EmptyCart = () =>{
return(
<div className={styles.cont}>
<p className={styles.text}>Looks like you have no items in your basket currently.</p>
<br />
<Link to='/products'><Btn width='313px'>Continue Shopping</Btn></Link>
</div>)
}

export default EmptyCart