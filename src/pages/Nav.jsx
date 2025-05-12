import { Link } from "react-router-dom";
import styles from './nav.module.css';

export default function Nav(){
    return (
      <div>
        <div className={styles.nav}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/dashboard">
            Dashboard
          </Link>
          <Link className={styles.link} to="/products">
            Products
          </Link>
        </div>
      </div>
    );
}