import { useEffect, useState } from "react";
import './lesson08.css';
import Lesson05 from "../lesson05/Lesson05";
import MyButton from "../../components/myButton/MyButton";

export default function Lesson08(): JSX.Element {


    const [toggle, setToggle] = useState<boolean>(false);
    const [dogImg, setDogImg] = useState<string>('');
    const [count, setCount] = useState<number>(0)


    const handleToggle = (): void => {
        setToggle(prev => !prev);
    };

    const handleCount = (): void => {
        setCount(prev => prev + 1);
    };

    // * самый простой fetch запрос за данными рассчитанный только на успех
    // fetch('https://dog.ceo/api/breeds/image/random')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })


    // ! useEffect принимает в себя два аргумента:
    // 1. действие которое должно произойти
    // 2. массив зависимостей - перечисление переменных на обновление которых можно 'подписать' useEffect и его действие

    // при передаче пустого массива - действие будет срабатывать один раз в начале жизненного цикла

    // !  код внутри этого useEffect с пустым массивом зависимостей сработает только один раз
    useEffect(() => {
        // * fetch запрос с проверкой ошибки (делайте когда сочтете нужным)
        fetch('https://dog.ceo/api/breeds/image/random')
            // обрабатываем ответ с сервера
            .then(res => {
                // если запрос прошел не успешно мы 'кидаем' ошибку
                if (!res.ok) {
                    throw new Error(`Error is ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setDogImg(data.message);
            })
            // после throw error мы попадаем в этот блок и выводим сообщение об ошибке в консоль
            .catch((err) => {
                // error message это то сообщение что мы передали выше
                console.error('Error:', err.message);
            });
    }, [count]);


    console.log('lesson 8 render!');

    useEffect(() => {
        console.log('lesson 5 mount!')
    }, []);


    return (
        <div>
            <h4>Lesson 08</h4>
            <h2>UseEffect() hook ⚡️</h2>
            <h3>3 этапа жизни компонента:</h3>
            <ul className="useEffect-list">
                <li>визуализация компонента - Mounting(монтирование)</li>
                <li>обновление компонента - Updating(обновление)</li>
                <li>удаление компонента из DOM - Unmounting (размонтирование)</li>
            </ul>
            <h3>Этап Updating происходит в двух случаях:</h3>
            <ul className="useEffect-list">
                <li>обновление переменной состояния</li>
                <li>обновление входящий props</li>
            </ul>

            <h3>UseEffect это хук в React который помогает гибко управлять действиями на разных этапах жизненного цикла компонента, изолировать действия от многократного ненужного повторения. UseEffect принимает в себя два аргумента:
            </h3>
            <ul className="useEffect-list">
                <li>действие которое должно произойти</li>
                <li>массив зависимостей - перечисление переменных на обновление которых можно 'подписать' useEffect и его действие</li>
                <li>при передаче пустого массива - действие будет срабатывать один раз в начале жизненного цикла</li>
            </ul>

            <div className="dog-wrapper">
                <img src={dogImg} alt="dogImg" />
            </div>

             <MyButton text={`${toggle ? 'hide' : 'show'} fellowship`} func={handleToggle} />
            <MyButton text={`${count} + 1`} func={handleCount} /> 
            

            {toggle && (<Lesson05 />)}

        </div>
    );
}