 import styles from './page.module.css'
 import { cardContent } from './content/cardInfo'
import Card from '@/components/Card/Card'

const firstText = 'My name is Juanjo Pischetz, and I am a full-stack developer. I would like to present my solution to the technical challenge for the Junior position within your company.'
const secondText = 'I invite you to click and explore the algorithms I have proposed and their respective solutions.'
const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.secondaryContainer} ${styles.glassEffect}`}>
        <h2 className={styles.title}>Welcome</h2>
        <span className={styles.text}>{firstText}</span>
        <span className={styles.text}>{secondText}</span>
      </div>
      <div className={styles.secondaryContainer}>
        {cardContent.map((card)=>
          (<Card title={card?.title} body={card.body} key={card.title} path={card.path}/>)
        )}
      </div>
    </div>
  )
}

export default Home
