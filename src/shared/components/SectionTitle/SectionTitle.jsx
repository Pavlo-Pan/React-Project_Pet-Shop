import { Link } from "react-router-dom";
import styles from './SectionTitle.module.css'
const SectionTitle = ({ title, linkTo, linkText }) => {
    return (
        <div className={styles.flex}>
            <h2 className={styles.title}>{title}</h2>
            {linkTo && linkText && (
                <>
                    <div className={styles.hrContainer}><hr className={styles.hr} /></div>
                    
                        <Link to={linkTo} className={styles.link}>
                            {linkText}
                        </Link>
                
                </>
            )}
        </div>
    );
};

export default SectionTitle;
