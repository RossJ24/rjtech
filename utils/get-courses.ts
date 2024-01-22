const COURSE_FILE = require('../courses.json');

export type Course = {
    code: string,
    title: string
    languages: string[],
    description: string | undefined | null,
}

export const getCourses = (): Course[] => {
    let courses: Course[] = [];
    return COURSE_FILE.courses.map((course) => getCourse(course)).reverse();
}

const getCourse = (courseJSON: any) => {
    let course: Course = {
        code: courseJSON.code,
        title: courseJSON.title,
        languages: courseJSON.languages,
        description: courseJSON.description
    }
    return course;
}