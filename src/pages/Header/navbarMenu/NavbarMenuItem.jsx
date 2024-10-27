import styles from './NavbarMenuItem.module.css';
import React, { useState } from 'react';
import NavbarDropdown from './NavbarDropdown';
import classNames from 'classnames';

const NavbarMenuItem = ({ item }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className={styles.navbarListItem}>
      <span
        className={classNames(styles.navbarLink, {
          [styles.arrowUp]: isDropdownOpen,
        })}
        onClick={toggleDropdown}
      >
        {item.title}
      </span>
      <NavbarDropdown dropdownItems={item.dropdown} isOpen={isDropdownOpen} />
    </li>
  );
};

export default NavbarMenuItem;
