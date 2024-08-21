import { Link } from 'react-router-dom';
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
        <p className={styles.aboutPar}>Leon Hinds is a skilled and certified Software Engineer 
          with a robust background in web development and database management. He honed his 
          technical expertise at General Assembly, where he earned a Software Engineer certificate
           in 2024. Leon has hands-on experience working with relational databases, utilizing 
           tools like Mongoose and Django to build efficient and scalable applications. His 
           commitment to continuous learning and passion for technology drive him to explore 
           innovative solutions and contribute meaningfully to every project he undertakes. 
           Leon is also an active contributor to the developer community on GitHub, where he shares 
           his work under the username lhinds86.</p>
      </div>
      
    </div>
  )
}

export default About;