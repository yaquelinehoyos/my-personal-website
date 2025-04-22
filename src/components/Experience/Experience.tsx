import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { motion } from 'framer-motion';
import styles from './Experience.module.scss';

const Experience = () => {
  const { experience } = useSelector((state: RootState) => state.resume);

  return (
    <motion.section
      id="experience"
      className={styles.experience}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Work Experience</h1>
        <div className={styles.timeline}>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.timelineContent}>
                <h2 className={styles.company}>{exp.company}</h2>
                <h3 className={styles.position}>{exp.position}</h3>
                <div className={styles.details}>
                  <span className={styles.period}>{exp.period}</span>
                  <span className={styles.location}>{exp.location}</span>
                </div>
                <ul className={styles.description}>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience; 