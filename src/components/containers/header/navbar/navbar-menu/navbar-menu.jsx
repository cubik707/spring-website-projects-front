import styles from './navbar-menu.module.css';
import NavbarMenuItem from '../navbar-menu-item/navbar-menu-item';
import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../../state/auth/auth-slice';

export default function NavbarMenu({ navbarMenuItems, isMobileOpen }) {
  const [isAnyDropdownOpen, setIsAnyDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDropdownToggle = (isOpen) => {
    setIsAnyDropdownOpen(isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
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
          <span onClick={handleLogout} className={styles.logOut}>
            Log out
          </span>
        </ul>
      </nav>
    </div>
  );
}
