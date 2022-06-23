
import { Course } from '../../utils/get-courses';
import { CourseCard } from '../CourseCard/CourseCard';
import styles from './RelatedCoursework.module.css';


export type RelatedCourseWorkProps = {
    courses: Course[],
}

export const RelatedCourseWork: React.FC<RelatedCourseWorkProps> = ({ courses }: RelatedCourseWorkProps) => {
    return (
        <div className={styles.container} id="relatedcoursework">
            <div className={styles.titleContainer}>
                <p className={styles.title}>Related Coursework</p>
            </div>
            <div className={styles.cardsContainer}>
                {courses.map((course, idx) => <CourseCard course={course} key={idx} />)}
            </div>
        </div>
    )
}
