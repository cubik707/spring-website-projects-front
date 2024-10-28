import styles from './Projects.module.css';
import Button from '../../../components/Button/Button';

export const Projects = () => {
  return (
    <section>
      <div className='container'>
        <div className={styles.projectsSection}>
          <h1 className={styles.title}>Projects</h1>
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>
              From configuration to security, web apps to big data—whatever the
              infrastructure needs of your application may be, there is a Spring
              Project to help you build it. Start small and use just what you
              need—Spring is modular by design.
            </p>
            <Button href={'#'} className={styles.button}>
              Release Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};