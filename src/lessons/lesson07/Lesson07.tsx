import MyButton from "../../components/myButton/MyButton";

function Lesson07() {
  // ! типизация объектов

  // * interface типизация
  // объекты можно типизировать через ключевое слово interface
  // с помощью него мы создаем описание типов объекта

  interface ISuperHero {
    id: number;
    name: string;
    nickname: string;
    superpowers: string[];
    // необязательный ключ в объекте
    age?: number;
  }

  // пример расширение типа через ключевое слово extends
  interface ISpaceHero extends ISuperHero {
    homePlanet: 'Earth' | 'Mars' | 'Saturn' | 'Crypton';
  }

  // пример объекта с типом ISuperHero
  const hero1: ISuperHero = {
    id: 1,
    name: 'Bruce Wayne',
    nickname: 'Batman',
    superpowers: []
  };

  // у этого объекта расширенный тип ISpaceHero
  const hero2: ISpaceHero = {
    name: 'Clark Kent',
    nickname: 'Superman',
    id: 2,
    superpowers: ['super fly', 'super vision'],
    homePlanet: 'Crypton'
  };

  // через quick fix > add missing properties можно быстро добавить недостающие для соблюдения типизации свойства в объект
  const hero3: ISuperHero = {
    id: 0,
    name: "",
    nickname: "",
    superpowers: []
  };

  // * пример объединения типов

  interface IDarkMagic {
    isDark: true;
  }

  interface ILightMagic {
    isLight: true;
  }

  interface IMagic extends IDarkMagic, ILightMagic { }

  // пример создания объекта с типом IMagic, который наследует IDarkMagic и ILightMagic
  const magic: IMagic = {
    isDark: true,
    isLight: true
  };
console.log(magic);

  // пример создания объекта с двумя типами
  // этот случай хуже подходит для переиспользования
  const magic1: IDarkMagic & ILightMagic = {
    isDark: true,
    isLight: true
  };
  console.log(magic1)
  
  // * type типизация
  // альтернативное ключевое слово для описания объекта

  type User = {
    id: number;
    isAdmin: boolean;
    name: string;
  };

  // пример объединения типа через type и &
  type UserProfile = User & {
    info: string;
  };

  const jane: User = {
    id: 12,
    isAdmin: false,
    name: "Jane Ostin"
  };

  const neo: UserProfile = {
    id: 10,
    isAdmin: false,
    name: 'Neo',
    info: 'Backend Develop in big tech company'
  };

  const artists: User[] =[jane, neo];
  console.log(artists);

  // ! дженерики
  // инструмент с помощью которого мы создаем обобщенные типы
  // работают при создании и использовании функций

  // эта функция ограниченна в передаваемых значениях - можно использовать только числа
  // function makeArray(first:number, second:number):number[] {
  //   return [first, second]
  // }

  // с помощью дженерика можно создать универсальную функцию
  // мы задаем параметр за место которого при вызове функции можно подставить любой тип
  function makeArray<T, N>(first: T, second: N): [T, N] {
    return [first, second];
  }

  console.log(makeArray<number, string>(12, '42'));
  makeArray<string, string>('apple', 'apple');
  makeArray<boolean, boolean>(true, false);
  console.log(makeArray<boolean, object>(true, {name: 'Iwan', age: 12}));

  // ! типизация массива объектов
  // при типизации массива из объектов мы сначала типизируем один экземпляр (как в случае с ISuperHero)
  // потом описываем типизацию массива через обращение к этому экземпляру и использовании квадратных скобок (ISuperHero[])

  const heroes: ISuperHero[] = [hero1, hero2, hero3]
  console.log(heroes);

  return (
    <div>
      <h4>Lesson07</h4>
      <h2>Typescript pt2 😌</h2>
      <p>Самое интересное на этом уроке происходит в теле функции компонента и в командной строке: </p>
      {/* пример использования кнопки со значениями по умолчанию text и type */}
      {/* в качестве func передали анонимную функцию */}
      <MyButton func={() => console.log('click!')} />
    </div>
  );
}

export default Lesson07;