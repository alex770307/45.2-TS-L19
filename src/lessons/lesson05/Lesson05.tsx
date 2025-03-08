import { fellowship } from './fellowship';
import './lesson05.css';

function Lesson05() {
  // console.log(fellowship);
  fellowship.map((el, num) => {
    console.log(el.name + " - под номером " + (num + 1))
  }

  )
  return (
    <>
      <h4>Lesson05:</h4>
      <h2>React map() components 🧝‍♀️</h2>
      <div className="container">
        {fellowship.map((hero, index) => (
          // key - это уникальное значение которое просит передать react в итерируемую верстку для того чтобы не ошибиться в отрисовки при сложных операциях (сортировка / удаление)
            <div className={`heroCard ${hero.isDark ? 'dark' : 'light'}`} key={index}>
            <p>Hero: {hero.name}</p>
            <img src={hero.image} height={150} alt="" />
            <p>{hero.isDark ? 'Villain 🔥' : 'Hero ✨'}</p>
            <p>{hero.age} years old</p>
            {hero.weapons[0] ? (
              <p>Weapons: {hero.weapons.map(el => " | " + el)}</p>
            ) : <p> No weapons 😔</p>
            }

          </div>
        ))}
      </div>
    </>
  );
}

export default Lesson05;