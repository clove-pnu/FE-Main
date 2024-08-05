import { Link, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SearchBar from '../SearchBar';
import styles from '../styles/MainLayout.module.css';

const UserStatusBar = lazy(() => import('auth/UserStatusBar'));

export default function MainLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div>
            <Link className={styles.homeLink} to="/">Clove</Link>
          </div>
          <div className={styles.searchBar}>
            <SearchBar />
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <UserStatusBar />
        </Suspense>
      </div>
      <Outlet />
    </div>
  );
}
