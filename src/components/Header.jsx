import styles from '../styles/Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <nav className={styles.navigation}></nav>{' '}
        <Link to="/myinfo">
          <span className="text-xl text-gray-10">내정보</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
