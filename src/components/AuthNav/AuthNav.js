import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import styles from './AuthNav.module.css';

function AuthNav() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {isLoggedIn ? (
          <>
            <li className={styles.item}>
              <NavLink
                to="/logout"
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className={styles.item}>
              <NavLink
                to="/login"
                exact
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Login
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/signup"
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Signup
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default AuthNav;
