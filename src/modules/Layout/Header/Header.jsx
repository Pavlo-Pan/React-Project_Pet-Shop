import { Link } from 'react-router-dom'
import {MainLogo} from '../../../assets/icons/Icons.jsx'
import Navbar from '../../Navbar/Navbar'
import FullscreenNavbar from '../../Navbar/FullscreenNavbar.jsx'
import CartIconsComponent from '../../Cart/CartIconsComponent/CartIconsComponent.jsx'
import { useMediaQuery } from '../../../shared/hooks/useMediaQuery.js'
import styles from './Header.module.css'


const Header =() =>{
    const isMobile = useMediaQuery('(max-width: 426px)');
    return( 
    <header className={styles.header}>
    <Link to='/'><MainLogo/></Link>
    {isMobile ? <FullscreenNavbar/> : <Navbar/>}
    <CartIconsComponent/>
    </header>)
}

export default Header