export const NavbarBurger = (props) => {
  return (
    <div className='navbar-burger'>
      <div
        className='hamburger'
        aria-expanded='false'
        role='button'
        tabIndex='0'
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
