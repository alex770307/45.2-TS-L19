import MyButton from "../../components/myButton/MyButton";

interface IReactInfo {
  developer: string;
  logo: string;
}

function Lesson02() {
  const element = <h3>Это JSX из переменной element</h3>;
  const text = "Эта строка пришла из переменной текст";

  const react: IReactInfo = {
    developer: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  };

  function showDeveloper(obj: IReactInfo): string {
    // ! можно так:
    //   if (obj.developer) {
    //     return "Developer: " + obj.developer;
    //   }
    //   return "Передайте валидный объект!"
    // ! а можно вот так:
    return obj.developer ? ("Developer: " + obj.developer) : ("Передайте валидный объект!")

  }

  const isLoggedIn: boolean = true;

  return (
    <div>
      <h4>Lesson02</h4>
      <h2>JSX components </h2>
      <p>
        В JSX мы можем пользоватся динамическими данными, которые приходят из
        тела реакт компонента или других файлов
      </p>
      {element}
      <p><b>Здесь будет строка:</b> {text}</p>
      <p>Это вычисление случилось в JSX: <b>{20 * 22}</b></p>
      {isLoggedIn ? (
        <img width={"50px"} src={react.logo} alt="react.logo" />
      ) : (
        "Пусто!"
      )}
      <p>{showDeveloper(react)}</p>
      <h3>Пример тернарного оператора в Реакт:</h3>
      <p>
        Пользователь <b>{isLoggedIn ? "в данный момент" : "не"}</b> авторизован
      </p>
      <MyButton func={function (): void {
        throw new Error("Function not implemented.");
      }} />
      <MyButton func={function (): void {
        throw new Error("Function not implemented.");
      }} />
      <MyButton func={function (): void {
        throw new Error("Function not implemented.");
      }} />
    </div>
  );
}
export default Lesson02;
