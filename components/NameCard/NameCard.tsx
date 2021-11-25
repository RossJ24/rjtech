import Image from "next/image";
import styles from './NameCard.module.css';
import profileflick from '../../images/prof.jpg';

const bio = "I am currently a Junior at Yale University studying Computer Science with a certificate in Data Science.";
export const NameCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headshotcontainer}>
                <Image className={styles.headshot} height={150} width={150} src={profileflick} />
            </div>
            <span className={styles.name}>Ross Johnson</span>
            <span className={styles.roles}>
                <a
                    className={styles.links}
                    href="https://www.nsbe.org/"
                    target="_blank"
                >
                     Yale NSBE President
                </a>
            </span>
            <span className={styles.bio}>{bio}</span>
        </div>
    );
}
