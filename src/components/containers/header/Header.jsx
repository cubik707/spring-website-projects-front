import styles from './Header.module.css';
import NavbarLogo from './navbar/navbar-logo/NavbarLogo';
import NavbarMenu from './navbar/navbar-menu/NavbarMenu';
import NavbarBurger from './navbar/navbar-burger/NavbarBurger';
import navbarMenuItems from './navbar/navbarMenuItems';
import { useState } from 'react';

function Header() {
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
