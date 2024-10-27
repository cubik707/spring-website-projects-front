import React from 'react';
import styles from './NavbarDropdown.module.css';
import menuItemStyles from './NavbarMenuItem.module.css';
import classNames from 'classnames';

const NavbarDropdown = ({ dropdownItems, isOpen }) => {
  const dropdownClass = classNames(styles.navbarDropdown, {
    ['active']: isOpen,
  });

  return (
    <ul className={dropdownClass}>
      {dropdownItems.map((dropdownItem, index) => (
        <li key={index} className={menuItemStyles.navbarListItem}>
          {dropdownItem.link ? (
            <a href={dropdownItem.link} className={dropdownItem.class || ''}>
              {dropdownItem.text}
            </a>
          ) : (
            <div className={dropdownItem.class || ''}>{dropdownItem.text}</div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavbarDropdown;
