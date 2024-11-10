import styles from './navbar-logo.module.css';
import { ReactComponent as Logo } from '../../../../../assets/logo.svg';

export default function NavbarLogo() {
  return (
    <div className={styles.navbarLogo}>
      <a href='/'>
        <Logo className={styles.logo} />
      </a>
    </div>
  );
}
