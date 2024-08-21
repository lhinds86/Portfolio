import { Link } from 'react-router-dom';
import styles from './hero.module.css';
import HeroImg from '../../assets/heroImg.png'


function Hero() {
  return (
    <div id='home' className={styles.heroContainer}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>Leon Hinds</h1>
        <h3 className={styles.heroSubtitle}>Jr. Software Engineer</h3>
      </div>
      <div>
        <img className={styles.heroImg} src={HeroImg} alt="Hero image" />
      </div>
    </div>
  )
}

export default Hero;