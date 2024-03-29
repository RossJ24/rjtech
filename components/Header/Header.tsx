import { TransparentButton } from '../TransparentButton/TransparentButton';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <TransparentButton
                WhiteText={true}
                clickFn={(e) => {
                    location.href = '#relatedcoursework';
                    window.history.replaceState({}, "", "/");
                }}
            >
                Related Coursework
            </TransparentButton>
            <TransparentButton
                WhiteText={true}
                clickFn={(e) => window.open('https://github.com/RossJ24', '_blank')}
            >
                Github
            </TransparentButton>
            <TransparentButton
                WhiteText={true}
                clickFn={(e) => window.open('https://www.linkedin.com/in/ross-johnson24/', '_blank')}
            >
                LinkedIn
            </TransparentButton>
            <TransparentButton
                WhiteText={true}
                clickFn={(e) => window.open('https://www.untapped.io/app/profile/ross-johnson', '_blank')}
            >
                Untapped
            </TransparentButton>
        </header>
    );
}
