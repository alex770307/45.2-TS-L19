import styles from './homework01.module.css'
import avatar from '../../images/avatar.jpg';

const Homework01 = () => {
  return (
    <div>
      <h4>Homework01</h4>
      <div className={styles.profileCcard}>
        <img
          src={avatar}
          alt="Profile Avatar"
          className={styles.profileImage }
        />
        <h2 className={styles.profileName}>Aleksandr Gerstenberger</h2>
        <p className={styles.profileHobby}>Мои хобби: программирование,
          ремонт компютерной техники, пчеловодство, путешествия, спорт.</p>
      </div>
    </div>
  );
};

export default Homework01;


