import { Link } from 'react-router-dom';
import { RoutingPath } from '../../routes/RoutingPath'

// images
import notFoundImg from '../../assets/images/notfound.svg';

// styles
import styles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.notfound_wrapper}>
      <div className={styles.notfound_img_wrapper}>
        <img
          className={styles.notfound_img}
          src={notFoundImg}
          alt="Page Not Found"
        />
      </div>
      <div className={styles.notfound_text_wrapper}>
        <h1>Page not Found - 404</h1>
        <Link to={RoutingPath.Home}>
          <button className={styles.notfound_button}>
            Go back to the homepage
          </button>
        </Link>
      </div>
    </div>
  );
};
