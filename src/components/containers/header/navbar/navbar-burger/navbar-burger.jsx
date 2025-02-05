import styles from './navbar-burger.module.css';
import classNames from 'classnames';

export default function NavbarBurger({ isMobileOpen, toggleMenu }) {
  return (
    <div className={styles.navbarBurger}>
      <div
        className={classNames(styles.hamburger, {
          [styles.open]: isMobileOpen,
        })}
        aria-expanded='false'
        role='button'
        tabIndex='0'
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
