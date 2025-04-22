import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>How I work</h1>
          <p className={styles.description}>
            As a <span className={styles.highlight}>software engineer</span>, I specialize in building responsive, accessible, and user-focused web applications using React, Redux, Vue, and Vuex. I care deeply about writing clean, maintainable code and turning complex ideas into intuitive user experiences.
          </p>
          <p className={styles.description}>
            I have experience working across the full frontend lifecycle, from translating design systems into components to optimizing performance and ensuring scalability. I enjoy staying close to both design and development, often bridging the gap between the two to deliver polished, reliable interfaces.
          </p>
          <p className={styles.description}>
            Collaboration is at the core of how I work. I thrive in cross-functional teams, working closely with designers, backend engineers, and product managers to bring features to life. I'm always open to feedback and see every project as an opportunity to learn, iterate, and grow.
          </p>
          <p className={styles.description}>
            Whether it's adopting a new tool, refining a user flow, or helping debug a tricky issue, I bring curiosity, care, and a user-first mindset to everything I build.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 