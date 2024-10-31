import styles from './Projects-list-section.module.css';
import ProjectsList from '../projects-list/Projects-list.jsx';
import projectsData from '../projects-data.js';
import Search from '../../../core/Search/Search.jsx';
import { useState } from 'react';

export default function ProjectsListSection() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      project.description.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <section>
      <div className={styles.projectsListSection}>
        <div className='container'>
          <div className={styles.projectsListSectionWrapper}>
            <Search value={searchValue} onSearchChange={handleSearchChange} />
            {filteredProjects.length > 0 ? (
              <ProjectsList projectsData={filteredProjects} />
            ) : (
              <p>Not found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
