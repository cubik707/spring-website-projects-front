import styles from './NavbarMenuItem.module.css';
import React, { useState } from 'react';
import NavbarDropdown from './NavbarDropdown';
import classNames from 'classnames';

const NavbarMenuItem = ({ item }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  // const titleClass = classNames(styles.navbarLink, { ['arrowUp']: isDropdownOpen });

  return (
    <li
      className={styles.navbarListItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={styles.navbarLink} onClick={toggleDropdown}>
        {item.title}
      </span>
      <NavbarDropdown dropdownItems={item.dropdown} isOpen={isDropdownOpen} />
    </li>
  );
};

export default NavbarMenuItem;
