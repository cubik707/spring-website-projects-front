import React from 'react';
import styles from './NavbarDropdown.module.css';
import classNames from 'classnames';
import { DEFAULT_LINK } from './navbarMenuItems';

const NavbarDropdown = ({ dropdownItems, isOpen }) => {
  const dropdownClass = classNames(styles.navbarDropdown, {
    [styles.active]: isOpen, // Use the active style from styles
  });

  return (
    <ul className={dropdownClass}>
      {dropdownItems.map((dropdownItem, index) => (
        <li key={index} className={styles.navbarListItem}>
          {dropdownItem.link !== null ? (
            <a
              href={dropdownItem.link || DEFAULT_LINK}
              className={classNames(styles.navbarDropdownLink, {
                [styles.viewAllProj]: dropdownItem.class === 'viewAllProj',
              })}
            >
              {dropdownItem.text}
            </a>
          ) : (
            <div className={styles[dropdownItem.class]}>
              {dropdownItem.text}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavbarDropdown;
