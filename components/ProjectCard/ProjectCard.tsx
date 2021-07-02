import { Project } from '../../utils/get-projects';
import styles from './ProjectCard.module.css';
import { LanguageChart } from './LanguageChart/LanguageChart';

type PCProps = {
    project: Project
}

export const ProjectCard: React.FC<PCProps> = ({ project }: PCProps) => {
    return (
        <div className={styles.container}>
            <a href={project.github} className={styles.link} target="_blank">
                <p className={styles.title}>{project.title}</p>
                <hr className={styles.divider} />
                <p className={styles.description}>{project.description}</p>

                {project.description ? <hr className={styles.divider} /> : <></>}

                <LanguageChart
                    languages={project.languages}
                    percentages={project.languagePercentages}
                />
            </a>
        </div>
    );
}
