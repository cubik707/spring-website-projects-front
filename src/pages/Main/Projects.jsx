import Button from '../../components/Button/Button';

export const Projects = (props) => {
  return (
    <section>
      <div className='container'>
        <div className='projects-section'>
          <h1 className='title'>Projects</h1>
          <div className='description-wrapper'>
            <p className='description'>
              From configuration to security, web apps to big data—whatever the
              infrastructure needs of your application may be, there is a Spring
              Project to help you build it. Start small and use just what you
              need—Spring is modular by design.
            </p>
            <Button href={'#'}>Release Calendar</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
