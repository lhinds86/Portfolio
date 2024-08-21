import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function MainNavbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navLogo}>
        <h3>LH</h3>
      </div>
      <nav>
        <ul>
          <li className={styles.navItems}><Link to="/home">Home</Link></li>
          <li className={styles.navItems}><Link to="/bio">Bio</Link></li>
          <li className={styles.navItems}><Link to="/resume">Skills</Link></li>
          <li className={styles.navItems}><Link to="/projects">Projects</Link></li>
          <li className={styles.navItems}><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavbar;
