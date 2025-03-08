import { Link } from 'react-router-dom';
import styles from './homePageLessons.module.css'

export default function HomePageLessons(): JSX.Element {
  return (
    <>
      <h2>Lessons:</h2>
      <div className={styles.gridContainer}>

        <Link to="lesson-01">
          <div>Lesson 1</div>
        </Link>
        <Link to="lesson-02">
          <div>Lesson 2</div>
        </Link>
        <Link to="lesson-03">
          <div>Lesson 3</div>
        </Link>
        <Link to="lesson-04">
          <div>Lesson 4</div>
        </Link>
        <Link to="lesson-05">
          <div>Lesson 5</div>
        </Link>
        <Link to="lesson-06">
          <div>Lesson 6</div>
        </Link>
        <Link to="lesson-07">
          <div>Lesson 7</div>
        </Link>
        <Link to="lesson-08">
          <div>Lesson 8</div>
        </Link>
        <Link to="lesson-09">
          <div>Lesson 9</div>
        </Link>
        <Link to="lesson-10">
          <div>Lesson 10</div>
        </Link>
        <Link to="lesson-11">
          <div>Lesson 11</div>
        </Link>
        <Link to="lesson-12">
          <div>Lesson 12</div>
        </Link>
        <Link to="lesson-13">
          <div>Lesson 13</div>
        </Link>
        <Link to="lesson-14">
          <div>Lesson 14</div>
        </Link>
        <Link to="lesson-15">
          <div>Lesson 15</div>
        </Link>
        <Link to="lesson-16">
          <div>Lesson 16</div>
        </Link>
      </div>
    </>
  );
}
