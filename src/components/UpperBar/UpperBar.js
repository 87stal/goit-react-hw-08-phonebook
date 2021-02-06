import Navigation from 'components/Navigation/Navigation';
import PrivateMenu from 'components/PrivateMenu/PrivateMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import styles from './UpperBar.module.css';

function UpperBar() {
  return (
    <div className={styles.box}>
      <Navigation />
      <AuthNav />
      <PrivateMenu />
    </div>
  );
}

export default UpperBar;
