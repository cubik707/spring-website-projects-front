import styles from './header.module.css';
import NavbarLogo from './navbar/navbar-logo/navbar-logo';
import NavbarMenu from './navbar/navbar-menu/navbar-menu';
import NavbarBurger from './navbar/navbar-burger/navbar-burger';
import navbarMenuItems from './navbar/navbar-menu-items';
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
