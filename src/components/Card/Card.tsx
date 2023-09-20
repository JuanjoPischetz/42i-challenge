import { contentBody } from '@/app/content/cardInfo'
import styles from './card.module.css'
import { FaChevronRight} from 'react-icons/fa'
import Link from 'next/link'

const Card = ({title, body, path}:contentBody) => {
  return (
    
        <Link href={path} className={`${styles.mainContainer} ${styles.glassEffect}`}>
        <div className={styles.textContainer} >
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.text} >{body}</span>
        </div>
        <div className={styles.iconContainer}>
            <FaChevronRight fontSize={55} color={'#457B9D'}/>
        </div>
        </Link>
  )
}

export default Card