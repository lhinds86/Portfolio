import styles from './about.module.css';
import AboutImg from '../../assets/aboutImg.png'


function About() {
  return (
    <div id='bio' className={styles.aboutContainer}>
      <div>
        <img className={styles.aboutImg} src={AboutImg} alt="About image" />
      </div>
      <div className={styles.aboutText}>
        <h3 className={styles.aboutTitle}>About Me</h3>
        <p className={styles.aboutPar}>I am a skilled and certified Software Engineer with a strong background in web development and database management. I honed my technical expertise at General Assembly, where I earned a Software Engineer certificate in 2024. I have hands-on experience working with relational databases, using tools like Mongoose and Django to build efficient and scalable applications. My commitment to continuous learning and passion for technology drive me to explore innovative solutions and contribute meaningfully to every project I undertake. I'm also an active contributor to the developer community on GitHub, where I share my work under the username lhinds86.</p>
      </div>
      
    </div>
  )
}

export default About;