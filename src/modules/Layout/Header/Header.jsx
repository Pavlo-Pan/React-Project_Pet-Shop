import { Link } from 'react-router-dom'

import {MainLogo} from '../../../assets/icons/Icons.jsx'
import Navbar from '../../Navbar/Navbar'
import CartIconsComponent from '../../CartIconsComponent/CartIconsComponent.jsx'
import styles from './Header.module.css'


const Header =() =>{
    return( 
    <header className={styles.header}>
    <Link to='/'><MainLogo/></Link>
    <Navbar/>
    <CartIconsComponent/>
    </header>)
}

export default Header