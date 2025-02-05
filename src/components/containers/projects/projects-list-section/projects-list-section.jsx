import styles from './projects-list-section.module.css';
import ProjectsList from '../projects-list/projects-list.jsx';
import Search from '../../../core/search/search.jsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../../../../state/projects/projects-thunk';

export default function ProjectsListSection() {
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { projects, loading } = useSelector((state) => state.projects);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchProjects()).unwrap();
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to load projects');
      }
    };

    fetchData();
  }, [dispatch]);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const filteredProjects = (projects || []).filter(
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
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : filteredProjects.length > 0 ? (
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
