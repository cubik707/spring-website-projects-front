import styles from './Header.module.css';
import { NavbarLogo } from './NavbarLogo';
import { NavbarMenu } from './navbarMenu/NavbarMenu';
import { NavbarBurger } from './NavbarBurger';
import navbarMenuItems from './navbarMenu/navbarMenuItems';
import { useState } from 'react';

function Header(props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerWrapperDesktop}>
          <NavbarLogo />
          <NavbarMenu
            navbarMenuItems={navbarMenuItems}
            isMobileOpen={isMobileMenuOpen}
          />
          <NavbarBurger
            isMobileOpen={isMobileMenuOpen}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
