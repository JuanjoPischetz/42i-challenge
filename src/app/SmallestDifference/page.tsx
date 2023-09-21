import SmallForm from "@/components/Forms/SmallForm"
import styles from './page.module.css'

const SmallestDifference = () => {

  const instructions = 'Fill both arrays with at least one number, separated by commas. Numbers, coma and space allowed.'
  return (
    <div className={styles.mainContainer}>
        <div className={`${styles.innerContainer} ${styles.glassEffect}`}>
        <h1 className={styles.title} >Smallest Difference</h1>
        <p className={styles.text}>{instructions}</p>
        <SmallForm/>
        </div>
    </div>
  )
}

export default SmallestDifference