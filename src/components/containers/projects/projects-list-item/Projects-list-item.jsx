import styles from './Projects-list-item.module.css';

export default function ProjectListItem({ title, description, link, image }) {
  return (
    <article className={styles.project}>
      <a href={link}>
        <div className={styles.projectItem}>
          <img className={styles.projectImg} src={image} alt={title} />
          <div className={styles.projectInfo}>
            <h2>{title}</h2>
            <p className={styles.projectInfoDescription}>{description}</p>
          </div>
        </div>
      </a>
    </article>
  );
}
