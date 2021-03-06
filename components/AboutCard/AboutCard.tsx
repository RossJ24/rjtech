import styles from './AboutCard.module.css';

const about = `I first started programming at the age of 17. I've always liked to learn about how things around me worked, and programming was a window into the heart of computers.
My first programming language was Java, but since then I've learned a variety of other programming languages. I have experience with languages like C, and C++ which require manual memory management, and languages like Python and Go, which are garbage collected.
The areas that I am most interested in are back-end programming and ML, but I also have experience with front-end programming.
Feel free to look at any of the projects below which I have managed and/or directly contributed to. This list is not comprehensive, since it excludes private repositories that include some of my most complex projects.
`;

export const AboutCard = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>About Me</p>
            {about
                .split('\n')
                .map((ele, idx) => {
                    return <p className={styles.about} key={-idx}>
                        {ele}
                    </p>
                })
            }
        </div >
    );
}
