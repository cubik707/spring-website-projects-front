import styles from './Header.module.css';
import { NavbarLogo } from './NavbarLogo';
import { NavbarMenu } from './navbarMenu/NavbarMenu';
import { NavbarBurger } from './NavbarBurger';
import navbarMenuItems from './navbarMenu/navbarMenuItems';

function Header(props) {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerWrapperDesktop}>
          <NavbarLogo />
          <NavbarMenu navbarMenuItems={navbarMenuItems} />
          <NavbarBurger />
        </div>
      </div>
    </header>
  );
}

export default Header;
