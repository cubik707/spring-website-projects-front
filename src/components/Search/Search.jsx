export const Search = (props) => {
  return (
    <div className='search'>
      <span className='search-icon material-symbols-outlined'>search</span>
      <input
        className='search-input'
        type='search'
        id='search-input-projects'
        placeholder='Search'
      />
      <span className='clear-icon material-symbols-outlined' id='clear-search'>
        clear
      </span>
    </div>
  );
};
