
import styles from './InfoCard.module.css'

const InfoCard = ({title, infoText, children}) =>{
    return(
        <>
        <div className={styles.container}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.infoText}>{infoText || children}</p>
        </div>
        </>
    )
}
export default InfoCard