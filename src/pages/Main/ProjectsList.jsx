import { ProjectList } from '../../components/ProjectList/ProjectList';

export const ProjectsList = (props) => {
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
