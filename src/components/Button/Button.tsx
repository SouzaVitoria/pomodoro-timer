import styles from "./Button.module.css";

interface ButtonProps {
  color?: "primary" | "secondary"
}

export function Button({ color = "primary" }: ButtonProps) {
  return <button className={`${styles.button} ${styles[color]}`}>Enviar</button>
}