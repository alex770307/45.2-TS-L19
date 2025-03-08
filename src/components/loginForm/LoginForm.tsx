
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
 import styles from './loginForm.module.css'

function LoginForm() {
    return (
        <div className={styles.loginForm}>
            <h4>Homework03</h4>
            <h2>Вход в aккаунт</h2>
            <MyInput
                name="username"
                type="text"
                placeholder="Введите имя пользователя"
                label="Имя пользователя  "
            />
            <MyInput
                name="email"
                type="email"
                placeholder="Введите вашу электронную почту"
                label="Электронная почта  "
            />
            <MyInput
                name="password"
                type="password"
                placeholder="Введите пароль"
                label="Пароль  "
            />
            <MyButton type="submit" text="войти"></MyButton>
        </div>
    )
}

export default LoginForm;


