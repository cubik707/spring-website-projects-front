import styles from './ProjectsList.module.css';
import ProjectListItem from './ProjectsListItem';

function ProjectsList({ projectsData }) {
  return (
    <div className={styles.projectsList}>
      {projectsData.map((project, index) => (
        <ProjectListItem
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          image={project.image}
        />
      ))}
    </div>
  );
}

export default ProjectsList;