import styles from './myButton.module.css'
 import cn from 'classnames';
// пример отдельного компонента кнопки
// экспорт по умолчанию написан перед объявлением функции

// типизация props для кнопки
interface IMyButtonProps {
  variant?: 'primary' | 'danger';
  disabled?: boolean;
  // необязательные ключи
  text?: string;
  type?: "button" | "submit" | "reset";
  // обязательный ключ
  func?: () => void;
}

// указали значения по умолчанию для необязательных ключей
export default function MyButton({ func = () => {}, text = "click me", type = 
"submit", variant = 'primary', disabled = false }: IMyButtonProps) {
  return <button
    className={cn(styles.myButton, {
      [styles.primary]: variant === 'primary',
      [styles.danger]: variant === 'danger',
      [styles.disabled]: disabled === true
    })}
    type={type}
    onClick={func}
  >{text}</button>;
}