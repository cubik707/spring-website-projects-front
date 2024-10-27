import ProjectList from './ProjectList';

export const ProjectsListSection = (props) => {
  return (
    <section>
      <div className='projects-list-section'>
        <div className='container'>
          <div className='projects-list-section-wrapper'>
            <ProjectList />
          </div>
        </div>
      </div>
    </section>
  );
};
