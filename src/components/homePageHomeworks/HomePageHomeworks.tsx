 import styles from './homePageHomeworks.module.css'

import { Link } from "react-router-dom";

export default function HomePageHomeworks():JSX.Element {
    return (
      <>
        <h2>Homeworks:</h2>
        <div className={styles.gridContainer}>
          <Link to="homework-01">
            <div>Homework 1</div>
          </Link>
          <Link to="homework-02">
            <div>Homework 2</div>
          </Link>
          <Link to="homework-03">
            <div>Homework 3</div>
          </Link>
          <Link to="homework-04">
            <div>Homework 4</div>
          </Link>
          <Link to="homework-05">
            <div>Homework 5</div>
          </Link>
          <Link to="homework-06">
            <div>Homework 6</div>
          </Link>
          <Link to="homework-08">
            <div>Homework 8</div>
          </Link>
          <Link to="homework-11">
            <div>Homework 11</div>
          </Link>
          <Link to="homework-12">
            <div>Homework 12</div>
          </Link>
          <Link to="homework-13">
            <div>Homework 13</div>
          </Link>
          <Link to="homework-14">
            <div>Homework 14</div>
          </Link>
          <Link to="homework-17">
            <div>Homework 17</div>
          </Link>
        </div>
      </>
    );
}