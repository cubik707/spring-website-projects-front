import styles from './navbar-menu-item.module.css';
import React, { useState } from 'react';
import NavbarDropdown from '../navbar-dropdown/navbar-dropdown';
import classNames from 'classnames';

const NavbarMenuItem = ({ item, isMobileOpen, onDropdownToggle }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    if (!isMobileOpen) {
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobileOpen) {
      setDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    if (isMobileOpen) {
      const newDropdownState = !isDropdownOpen;
      setDropdownOpen(newDropdownState);
      onDropdownToggle(newDropdownState);
    }
  };

  return (
    <li
      className={classNames(styles.navbarListItem, {
        [styles.open]: isMobileOpen,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={classNames(styles.navbarLink, {
          [styles.arrowUp]: isDropdownOpen,
          [styles.open]: isMobileOpen,
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
