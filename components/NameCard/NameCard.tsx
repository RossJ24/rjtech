import Image from "next/image";
import styles from './NameCard.module.css';
import profileflick from '../../images/prof3.jpg';

const bio = "I am a recent grad from Yale University who studied Computer Science with a certificate in Data Science.";
export const NameCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headshotcontainer}>
                <Image className={styles.headshot} height={150} width={150} src={profileflick} />
            </div>
            <span className={styles.name}>Ross Johnson</span>
            <span className={styles.roles}>
                SWE @ Google
            </span>
            <span className={styles.bio}>{bio}</span>
        </div>
    );
}
