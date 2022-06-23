import projects from "../../pages/api/projects";
import { Course } from "../../utils/get-courses";
import styles from "./CourseCard.module.css"

type CCProps = {
    course: Course
}

export const CourseCard = ({ course }: CCProps) => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>{`${course.code}: ${course.title}`}</span>
            {/*TODO: Fill out course descriptions and include them in the card.*/}
            {/* <hr className={styles.divider} />
            <span className={styles.description}>{course.description}</span> */}
            <hr className={styles.divider} />
            <div className={styles.language_container}>
                <div>
                    Languages Used
                </div>
                <hr className={styles.divider} />
                {course.languages.map((lang, idx) => <span className={styles.language} key={idx}>{lang}</span>)}
            </div>
        </div>
    );
}