import styles from './NavbarMenu.module.css';
import NavbarMenuItem from './NavbarMenuItem';
import classNames from 'classnames';
import { useState } from 'react';

export default function NavbarMenu({ navbarMenuItems, isMobileOpen }) {
  const [isAnyDropdownOpen, setIsAnyDropdownOpen] = useState(false);

  const handleDropdownToggle = (isOpen) => {
    setIsAnyDropdownOpen(isOpen);
  };

  return (
    <div
      className={classNames(styles.navbarMenuWrapper, {
        [styles.open]: isMobileOpen,
        [styles.scrollable]: isMobileOpen && isAnyDropdownOpen,
      })}
    >
      <nav>
        <ul className={styles.navbarMenu}>
          {navbarMenuItems.map((item, index) => (
            <NavbarMenuItem
              key={index}
              item={item}
              isMobileOpen={isMobileOpen}
              onDropdownToggle={handleDropdownToggle}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
