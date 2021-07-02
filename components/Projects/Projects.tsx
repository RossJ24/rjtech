import { Project } from '../../utils/get-projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';

export type ProjectsProps = {
    projects: Project[],
}

export const Projects: React.FC<ProjectsProps> = ({ projects }: ProjectsProps) => {
    return (
        <div className={styles.container} id="projectportfolio">
            <div className={styles.titleContainer}>
                <p className={styles.title}>🛠️ Projects 🛠️</p>
            </div>
            <div className={styles.cardsContainer}>
                {projects.map((e, idx) => <ProjectCard project={e} key={idx} />)}
            </div>
        </div>
    )
}
