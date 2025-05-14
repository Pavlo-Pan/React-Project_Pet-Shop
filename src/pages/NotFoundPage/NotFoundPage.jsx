import { useDocumentTitle } from "../../shared/hooks/useDocumentTitle";
import styles from './NotFoundPage.module.css'
import Container from '../../shared/components/Container/Container'
import Btn from "../../shared/components/Btn/Btn";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
    useDocumentTitle('404');
    return (
        <Container>
            <div className={styles.flex}>
                <img src="src\assets\images\404.png" alt="404" className={styles.img} />
                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.text}>We’re sorry, the page you requested could not be found.</p>
                <p className={styles.text}>Please go back to the homepage.</p>
                <br />
                <div className={styles.link}>
                <Link to='/'><Btn>Go home</Btn></Link>
                </div>

            </div>
        </Container>
    )
}
export default NotFoundPage;