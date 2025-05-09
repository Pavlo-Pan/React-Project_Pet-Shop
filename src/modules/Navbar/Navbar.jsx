import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';
import navbarMenuItems from './navbarMenuItems'
const Navbar = () => {
    const elements = navbarMenuItems.map(({ href, text }) => (
        <li key={text}>
            <NavLink to={href}  className={({ isActive }) =>
                    isActive ? styles.navLinkActive : styles.navLink
                }>
                {text}
            </NavLink>
        </li>
    ));

    return (
        <nav ><ul className={styles.nav}>{elements}</ul>

        
        </nav>
    );
};

export default Navbar;
