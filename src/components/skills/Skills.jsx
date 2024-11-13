// Styles Import 
import styles from './Skills.module.css';
// Skills Logos
import htmlLogo from '../../assets/Logos/html5.png'
import cssLogo from '../../assets/Logos/css3.png'
import jsLogo from '../../assets/Logos/javascript.png'
import jqueryLogo from '../../assets/Logos/jquery.png'
import reactLogo from '../../assets/Logos/react.png'
import nodejsLogo from '../../assets/Logos/nodejs.png'
import vueLogo from '../../assets/Logos/vuejs.png'
import bootstrapLogo from '../../assets/Logos/bootstrap.png'
import npmLogo from '../../assets/Logos/npm.png'
import pythonLogo from '../../assets/Logos/python.png'
import postgresqlLogo from '../../assets/Logos/postgresql.png'
import mongodbLogo from '../../assets/Logos/mongodb.png'
import djangoLogo from '../../assets/Logos/django.png'
import gitLogo from '../../assets/Logos/git.png'
import githubLogo from '../../assets/Logos/github.png'
import typescriptLogo from '../../assets/Logos/typescript.png'

// Skills Section Component
function Skills() {
  return (
    
    <div id='skills' className={styles.skillsContainer}>
        <div className={styles.titleContainer}>
            <h3>Skills</h3>
        </div>
        <div className={styles.skillslogoContainer}>
            <div className={styles.colOne}>
                <img className={styles.skillsLogo} src={htmlLogo} alt='HTML Logo'/>
                <img className={styles.skillsLogo} src={cssLogo} alt="CSS Logo" />
                <img className={styles.skillsLogo} src={jsLogo} alt="Javascript Logo" />
                <img className={styles.skillsLogo} src={jqueryLogo} alt="Jquery Logo" />
                <img className={styles.skillsLogo} src={reactLogo} alt='HTML Logo'/>
                <img className={styles.skillsLogo} src={nodejsLogo} alt="CSS Logo" />
                <img className={styles.skillsLogo} src={vueLogo} alt="Javascript Logo" />
                <img className={styles.skillsLogo} src={bootstrapLogo} alt="Bootstrap Logo" />
            </div>
            <div className={styles.colTwo}>
                <img className={styles.skillsLogo} src={npmLogo} alt="NPM Logo" />
                <img className={styles.skillsLogo} src={pythonLogo} alt="Python Logo" />
                <img className={styles.skillsLogo} src={postgresqlLogo} alt="PostgreSQL Logo" />
                <img className={styles.skillsLogo} src={mongodbLogo} alt="MongoDB Logo" />
                <img className={styles.skillsLogo} src={djangoLogo} alt="Django Logo" />
                <img className={styles.skillsLogo} src={gitLogo} alt="Git Logo" />
                <img className={styles.skillsLogo} src={githubLogo} alt="GitHub Logo" />
                <img className={styles.skillsLogo} src={typescriptLogo} alt="Typescript Logo" />
            </div>
    
        </div>
    </div>
  )
}

export default Skills;