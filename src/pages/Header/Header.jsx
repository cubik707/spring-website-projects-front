import { NavbarLogo } from './NavbarLogo';
import { NavbarMenu } from './NavbarMenu';
import { NavbarBurger } from './NavbarBurger';

export const Header = (props) => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-wrapper-desktop'>
          <NavbarLogo />
          <NavbarMenu />
          <NavbarBurger />
        </div>
      </div>
    </header>
  );
};
