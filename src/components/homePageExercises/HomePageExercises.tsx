import { Link } from 'react-router-dom';
import styles from './homePageExercises.module.css'

export default function HomePageExercises(): JSX.Element {
  return (
    <>
      <h2>Exercises:</h2>
      <div className={styles.gridContainer}>

        <Link to="task-12">
          <div> 12 Formik 📝</div>
        </Link>
        <Link to="task-13">
          <div> 13 YUP validation 🔐</div>
        </Link>
      </div>
    </>
  );
}
