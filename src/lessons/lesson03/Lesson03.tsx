import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";

function Lesson03() {
    return (
        <div>
            <h4>lesson03</h4>
            <h2>React Props children😻</h2>
            <p>Props используются для передачи данных от родительских компонентов
                дочерним компонентам. Это один из основных механизмов передачи
                данных в React.</p>
            <MyButton />
            <MyButton />
            <MyButton />
            <UserCard name={' Bilbo'} age={45} lastname={' Baggins'}/>
            <UserCard name={' Gendalf'} age={2000} lastname={' White'}/>
        </div>
    )
}

export default Lesson03;