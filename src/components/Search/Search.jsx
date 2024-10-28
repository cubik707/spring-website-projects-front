import styles from './Search.module.css';

export default function Search(props) {
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
      />
      <span
        className={`${styles.clearIcon} material-symbols-outlined`}
        id='clear-search'
      >
        clear
      </span>
    </div>
  );
}
