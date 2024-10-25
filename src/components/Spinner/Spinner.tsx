import styles from './Spinner.module.css'

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      {/* You can use an SVG or just a div for simplicity */}
      <div className={styles.loader}></div>
    </div>
  )
}
