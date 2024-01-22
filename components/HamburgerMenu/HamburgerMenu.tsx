import styles from './HamburgerMenu.module.css';
import Image from 'next/image';
import MenuIcon from '../../images/hamburger-menu.svg';
import { useState } from 'react';
import { TransparentButton } from '../TransparentButton/TransparentButton';

export const HamburgerMenu = () => {
    // logic to toggle whether or not the hamburger menu is visibile
    const [visiblity, setvisiblity] = useState(false);
    let menustyle = visiblity ? styles.menu : styles.hiddenmenu;
    return (
        <>
            <button className={styles.toggle} onClick= {(e) => {setvisiblity(!visiblity)}}>
                <Image src={MenuIcon} height={35} width={35}/>
            </button>
            <div className={menustyle}>
                <TransparentButton
                    WhiteText={true}
                    clickFn={(e) => window.open('https://github.com/RossJ24', '_blank')}
                >
                    Github
                </TransparentButton>
                <hr className={styles.divider}/>
                <TransparentButton
                    WhiteText={true}
                    clickFn={(e) => window.open('https://www.linkedin.com/in/ross-johnson24/', '_blank')}
                >
                    LinkedIn
                </TransparentButton>
                <hr className={styles.divider}/>
                <TransparentButton
                    WhiteText={true}
                    clickFn={(e) => window.open('https://www.canvas.com/app/profile/ross-johnson', '_blank')}
                >
                    Canvas
                </TransparentButton>
            </div>
        </>
    )
}
