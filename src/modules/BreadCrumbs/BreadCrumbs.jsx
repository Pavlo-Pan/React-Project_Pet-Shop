import { Link } from 'react-router-dom';
import { useBreadcrumbs } from '../../shared/hooks/useBreadcrumbs';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = () => {
    const crumbs = useBreadcrumbs();

    return (
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            {crumbs.map((c, i) => {
                const isLast = i === crumbs.length - 1;
                return (
                    <span key={c.to} className={styles.item}>
                        {isLast
                            ? <span className={styles.current}>{c.name}</span>
                            : <Link to={c.to} className={styles.link}>{c.name}</Link>
                        }
                        {!isLast && <span className={styles.sep} />}
                    </span>
                );
            })}
        </nav>
    );
};
export default Breadcrumbs
