import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './Education.module.scss';

const Education: React.FC = () => {
  const education = useSelector((state: RootState) => state.resume.education);

  return (
    <section className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.educationGrid}>
          <div className={styles.educationCard}>
            <h3 className={styles.school}>{education.institution}</h3>
            <p className={styles.degree}>{education.degree}</p>
            <div className={styles.details}>
              <span>{education.year}</span>
            </div>
            {education.thesis && (
              <div className={styles.thesis}>
                <h4>Thesis</h4>
                <p className={styles.thesisTitle}>{education.thesis}</p>
                <p className={styles.thesisDescription}>{education.description}</p>
                <a href={education.link} target="_blank" rel="noopener noreferrer">View Thesis (available in spanish)</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 