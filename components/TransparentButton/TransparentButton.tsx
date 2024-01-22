import styles from './TransparentButton.module.css';

type TBProps = {
    children?: React.ReactNode,
    WhiteText: boolean,
    clickFn?: Function,
}

export const TransparentButton: React.FC<TBProps> = ({ children, WhiteText, clickFn }: TBProps) => {
    let styling = WhiteText ? styles.buttonWT : styles.buttonBT;
    return (
        <button className={styling} onClick={(e) => { if (clickFn) { clickFn(e) } }}>
            <span className={styles.contents}>{children}</span>
        </button>
    );
}
