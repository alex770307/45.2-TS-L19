import styles from './сhildrenProps.module.css'

interface IChildrenPropsProps {
  text?: string;
  // ! по ключу children приходят любые теги которые будут обернуты этим компонентом
  children: React.ReactNode;
}

export default function ChildrenProps({ text, children }: IChildrenPropsProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h4>Children Props Example 👨‍👩‍👦</h4>
      <h5>Данные ниже пришли из компонента-родителя:</h5>
      <p>{text}</p>
      {/* за место children придут обернутые в теги этого компонента данные */}
      {children}
      <h5>Этот текст не динамический и всегда будет в компоненте</h5>
    </div>
  )
}