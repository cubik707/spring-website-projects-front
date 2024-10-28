import styles from './Search.module.css';
import { useState } from 'react';

export default function Search({ onSearchChange }) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };

  const handleClear = () => {
    setSearchValue('');
    onSearchChange('');
  };

  return (
    <div className={styles.search}>
      <span className={`${styles.searchIcon} material-symbols-outlined`}>
        search
      </span>
      <input
        className={styles.searchInput}
        type='search'
        id='search-input-projects'
        placeholder='Search'
        value={searchValue}
        onChange={handleInputChange}
      />
      <span
        className={`${styles.clearIcon} material-symbols-outlined`}
        id='clear-search'
        onClick={handleClear}
      >
        clear
      </span>
    </div>
  );
}
