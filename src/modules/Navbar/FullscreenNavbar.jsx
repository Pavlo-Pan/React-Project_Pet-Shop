// FullscreenNavbar.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  motion as Motion, AnimatePresence } from 'framer-motion';
import styles from './FullscreenNavbar.module.css';
import navbarMenuItems from './navbarMenuItems';

export default function FullscreenNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((o) => !o);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={styles.navbar}>
            <button
                className={`${styles.burger} ${isOpen ? styles.burgerOpen : ''}`}
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="fullscreen-menu">
                <span />
                <span />
                <span />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <Motion.div
                        id="fullscreen-menu"
                        className={styles.fullscreen}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}>
                        <ul className={styles.menuList}>
                            {navbarMenuItems.map(({ href, text }) => (
                                <li key={text} onClick={closeMenu}>
                                    <NavLink
                                        to={href}
                                        className={({ isActive }) =>
                                            isActive ? styles.navLinkActive : styles.navLink}>
                                        {text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </Motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

