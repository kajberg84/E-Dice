import { Hero } from '../../components/hero/Hero';
import { Link } from 'react-router-dom'

// styles
import styles from './Account.module.css'

export const Account = () => {

  // Uppdatera så at denna kolla mot userContext
  const tempUser = "John Doe"
  return (
    <div className={styles.account_container}>
      <Hero title={`Hello ${tempUser}`}/>
      <div className={styles.account_wrapper}>
        <div className={styles.account_content}>
          <h2>Find some amazing dices in our shop</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum quaerat, ipsa aperiam veritatis qui amet eum at dolor vero nemo facere hic corporis tempore voluptatibus? Aliquid similique ipsam labore aspernatur est quae, explicabo eius ea quibusdam reprehenderit sunt unde.</p>
          <Link to="/"><button className={styles.account_button}>Shop Dices</button></Link>
        </div>
      </div>
    </div>
  );
};
