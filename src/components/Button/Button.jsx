import styles from './Button.module.css';

function Button({ children, onClick, href }) {
  if (href) {
    return (
      <a href={href} className={styles.button} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type='button' className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
