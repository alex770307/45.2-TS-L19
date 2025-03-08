
// import styles from './Lesson16.module.css'

import ChildrenButton from "../../components/childrenButton/ChildrenButton";
import ChildrenProps from '../../components/childrenProps/ChildrenProps';
import MyButton from "../../components/myButton/MyButton";

export default function Lesson16(): JSX.Element {
  return (
    <div>
      <h2>Lesson 16: react practice 🙇‍♂️</h2>



      <ChildrenProps text="переданный текст через обычный синтаксис props">
        <ChildrenButton
          onClick={() => console.log('click')}
        >кнопка c props children</ChildrenButton>



      <MyButton text="кнопка без props children">
      </MyButton>


        <ul>
          <li style={{ color: 'red' }}>🌞 данные из lesson 16</li>
          <li style={{ color: 'red' }}>переданы через props children</li>
        </ul>
      </ChildrenProps>

      <ChildrenProps text="обычный props">
        <h4 style={{ color: 'red' }}>🌛 а это уже другие данные из lesson 16</h4>
      </ChildrenProps>
      <ChildrenProps>
        <p style={{ color: 'red' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, eius quas. Aliquid incidunt nisi quas ea unde, aspernatur ab blanditiis quod similique cum fugit ad dolorem quam omnis dignissimos libero.
          Dicta debitis velit perferendis omnis repellat reprehenderit quam neque, facere itaque, provident iusto officiis maxime dignissimos quibusdam aspernatur ex reiciendis voluptates accusantium tempore perspiciatis quos architecto soluta. Nobis, accusantium iste.
        </p>
      </ChildrenProps>
    </div>
  );
}