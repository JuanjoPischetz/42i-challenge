import styles from './page.module.css'
import NonForm from '@/components/Forms/NonForm'

const NonConstructibleChange = () => {

  const instructions = 'Fill the array with at least one number, separated by commas. Numbers, coma and space allowed.'
  return (
    <div className={styles.mainContainer}>
        <div className={`${styles.innerContainer} ${styles.glassEffect}`}>
        <h1 className={styles.title} >Non Constructible Change</h1>
        <p className={styles.text} >{instructions}</p>
        <NonForm/>
        </div>
    </div>
  )
}

export default NonConstructibleChange