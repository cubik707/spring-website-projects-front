import styles from './button.module.css';

function Button({ children, onClick, href, className }) {
  const buttonClass = `${styles.button} ${className || ''}`;

  return href ? (
    <a href={href} className={buttonClass} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button type='button' className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
