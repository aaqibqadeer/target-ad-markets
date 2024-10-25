import styles from './Spinner.module.css'

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.loader}></div>
    </div>
  )
}
