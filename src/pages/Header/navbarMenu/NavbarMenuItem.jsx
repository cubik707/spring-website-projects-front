import styles from './NavbarMenuItem.module.css';
import React, { useState } from 'react';
import NavbarDropdown from './NavbarDropdown';
import classNames from 'classnames';

const NavbarMenuItem = ({ item }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <li
      className={styles.navbarListItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={classNames(styles.navbarLink, {
          [styles.arrowUp]: isDropdownOpen,
        })}
      >
        {item.title}
      </span>
      <NavbarDropdown dropdownItems={item.dropdown} isOpen={isDropdownOpen} />
    </li>
  );
};

export default NavbarMenuItem;
