import Link from "next/link"
import styles from './navbar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.mainContainer} >
        <Link href={'/'}>
            <button className={styles.button}>Home</button>
        </Link>
        <div className={styles.secondContainer} >
        <Link href={'/smallestdifference'}>
            <button className={styles.button}>Smallest Difference</button>
        </Link>
        <Link href={'/nonconstructiblechange'}>
            <button className={styles.button}>Non Constructible Change</button>
        </Link>
        </div>
    </nav>
  )
}

export default NavBar