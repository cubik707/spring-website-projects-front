import styles from './ProjectsListSection.module.css';
import ProjectsList from './ProjectsList.jsx';
import projectsData from './projectsData.js';
import Search from '../../../components/Search/Search.jsx';
import { useState } from 'react';

export const ProjectsListSection = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleSearchChange = (value) => {
    setSearchValue(value);

    const filtered = projectsData.filter(
      (project) =>
        project.title.toLowerCase().includes(value.toLowerCase()) ||
        project.description.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredProjects(filtered);
  };

  return (
    <section>
      <div className={styles.projectsListSection}>
        <div className='container'>
          <div className={styles.projectsListSectionWrapper}>
            <Search value={searchValue} onSearchChange={handleSearchChange} />
            <ProjectsList projectsData={filteredProjects} />
          </div>
        </div>
      </div>
    </section>
  );
};
