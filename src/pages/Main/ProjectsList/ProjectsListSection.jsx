import styles from './ProjectsListSection.module.css';
import ProjectsList from './ProjectsList.jsx';
import projectsData from './projectsData.js';
import Search from '../../../components/Search/Search.jsx';

export const ProjectsListSection = (props) => {
  return (
    <section>
      <div className={styles.projectsListSection}>
        <div className='container'>
          <div className={styles.projectsListSectionWrapper}>
            <Search />
            <ProjectsList projectsData={projectsData} />
          </div>
        </div>
      </div>
    </section>
  );
};
