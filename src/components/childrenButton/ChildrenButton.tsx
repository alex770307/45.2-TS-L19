import styles from './childrenButton.module.css'

interface IChildrenButtonProps {
  onClick: () => void;
  children: React.ReactNode
}

export default function ChildrenButton({ onClick, children }: IChildrenButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick}>{children}</button>
  )
}