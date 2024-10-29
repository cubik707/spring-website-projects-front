import styles from './Projects-list.module.css';
import ProjectListItem from '../projects-list-item/Projects-list-item';
import { DEFAULT_LINK } from '../projects-data';

export default function ProjectsList({ projectsData }) {
  return (
    <div className={styles.projectsList}>
      {projectsData.map((project, index) => (
        <ProjectListItem
          key={index}
          title={project.title}
          description={project.description}
          link={project.link || DEFAULT_LINK}
          image={project.image}
        />
      ))}
    </div>
  );
}
