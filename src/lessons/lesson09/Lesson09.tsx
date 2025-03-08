import MyButton from '../../components/myButton/MyButton'
import styles from './lesson09.module.css'

export default function Lesson09() {
  console.log(styles)
  return (
    <div>
      <h4>Lesson 09 30.01.25</h4>
      <h2 className={styles.heading}>Lesson 09: CSS modules 🎨</h2>
      <p className={`${styles.textGreen} ${styles.desc}`}>CSS модули - это технология, c помощью которой мы можем изолированно работать со стилями</p>
      <MyButton variant="danger" text="danger" />
      <MyButton disabled={true} text="disabled" />
      <MyButton text="primary" />
      <p>Задачу добавления нескольких классов можно решить так:</p>
      <ul className={styles.list}>
        <li>Конкатенация</li>
        <li>Шаблонная строка</li>
        <li>Библиотека classnames</li>
      </ul>
    </div>
  );
}