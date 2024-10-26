function Button ({ children, onClick, type = 'button', href }) {
  if (href) {
    return (
      <a href={href} className='button' onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className='button' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
