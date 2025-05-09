import InfoCard from '../../../shared/components/InfoCard/InfoCard';
import SectionTitle from '../../../shared/components/SectionTitle/SectionTitle';
import { InstagramIcon, WhatsUpIcon } from '../../../assets/icons/Icons'
import GoogleMapEmbed from '../../../shared/components/GoogleMapEmbed/GoogleMapEmbed';
import Container from '../../../shared/components/Container/Container';
import styles from './Footer.module.css'

const Footer = () => {
    return (<footer className={styles.footer}>
        <Container>

            <SectionTitle title='Contact'/*  linkTo='/discount' linkText='All sales' */ />
            <div className={styles.container}>
                <InfoCard title='Phone'><a href="tel:+49 30 915-88492" className={styles.link}>+49 30 915-88492</a></InfoCard>
                <InfoCard title='Socials'><a href="http://instagram.com" className={styles.link}><InstagramIcon /></a> <a href="http://whatsup.com" className={styles.link}><WhatsUpIcon /></a></InfoCard>
                <InfoCard title='Address' infoText='Wallstraẞe 9-13, 10179 Berlin, Deutschland' />
                <InfoCard title='Working Hours' infoText='24 hours a day' /></div>
            <GoogleMapEmbed width='100%' className={styles.map} />

        </Container>
    </footer>
    )
}
export default Footer;