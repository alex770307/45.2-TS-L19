
import MyButton from "../myButton/MyButton";

interface IUserCardProps {
  name: string;
  age: number;
  lastname: string;
}

// на место props придет объект с переданными в родителе данными по соответствующим ключам
function UserCard({ name, age, lastname }: IUserCardProps) {
  // если не знать синтаксис деструктуризации и хочется разделить объект на много переменных со значениями по соответствующим ключам - нужно писать много строк кода
  // const name = props.name
  // const age = props.age

  // функция обработчик
  const handleClick = () => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age} </p>
      <p>Lastname: {lastname}</p>
      <MyButton func={handleClick} text={`Choose ${name} ${lastname}`} />
    </div>
  );
}

export default UserCard;