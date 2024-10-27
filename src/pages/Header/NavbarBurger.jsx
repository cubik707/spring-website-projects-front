import styles from './NavbarBurger.module.css';

export const NavbarBurger = (props) => {
  return (
    <div className={styles.navbarBurger}>
      <div
        className={styles.hamburger}
        aria-expanded='false'
        role='button'
        tabIndex='0'
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
