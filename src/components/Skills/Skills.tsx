import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { motion } from 'framer-motion';
import styles from './Skills.module.scss';

const Skills = () => {
  const { skills, certifications } = useSelector((state: RootState) => state.resume);

  return (
    <motion.section
      className={styles.skills}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Skills & Certifications</h1>
        
        <div className={styles.sections}>
          <motion.div
            className={styles.section}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.sectionTitle}>Frameworks & Tools</h2>
            <div className={styles.skillsList}>
              {skills.frameworks.map((skill, index) => (
                <motion.div
                  key={index}
                  className={styles.skillItem}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={styles.skillName}>{skill}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.section}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.sectionTitle}>Languages</h2>
            <div className={styles.languages}>
              {skills.languages.map((lang, index) => (
                <motion.div
                  key={index}
                  className={styles.languageItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className={styles.languageName}>{lang.name}</span>
                  <div className={styles.levelContainer}>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`${styles.levelDot} ${
                          i < (lang.level || 0) ? styles.filled : ''
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.section}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.sectionTitle}>Certifications</h2>
            <div className={styles.certifications}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className={styles.certificationItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills; 