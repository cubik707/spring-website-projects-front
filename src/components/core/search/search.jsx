import styles from './search.module.css';

export default function Search({ value, onSearchChange }) {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  const handleClear = () => {
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
        placeholder='Search'
        value={value}
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
