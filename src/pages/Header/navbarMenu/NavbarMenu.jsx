import styles from './NavbarMenu.module.css';
import NavbarMenuItem from './NavbarMenuItem';

export const NavbarMenu = ({ navbarMenuItems }) => {
  return (
    <div className={styles.navbarMenuWrapper}>
      <nav>
        <ul className={styles.navbarMenu}>
          {navbarMenuItems.map((item, index) => (
            <NavbarMenuItem key={index} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
