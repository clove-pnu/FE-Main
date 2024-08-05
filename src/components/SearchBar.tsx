import styles from './styles/SearchBar.module.css';

export default function SearchBar() {
  return (
    <div>
      <input
        type="text"
        className={styles.searchBar}
      />
    </div>
  );
}
