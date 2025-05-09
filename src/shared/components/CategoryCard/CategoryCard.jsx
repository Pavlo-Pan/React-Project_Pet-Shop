import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ category }) => {
    const { id, title, image } = category;
    return (
        <Link to={`/categories/${id}`} className={styles.card}>
            <img src={image} alt={title} className={styles.img} />
            <p className={styles.title}>{title}</p>
        </Link>
    );
};

export default CategoryCard;