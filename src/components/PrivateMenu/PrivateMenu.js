import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import styles from './PrivateMenu.module.css';

function PrivateMenu() {
  const name = useSelector(authSelectors.getUserName);

  return <div className={styles.greeting}>Hello, {name}!</div>;
}

export default PrivateMenu;
