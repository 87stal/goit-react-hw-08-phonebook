import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import styles from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to="/"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Home page
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={styles.item}>
            <NavLink
              to="/phone-book"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Phone book
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
