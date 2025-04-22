import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import styles from './App.module.scss';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll(`.${styles.section}`);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <section id="profile" className={styles.section}>
          <Profile />
        </section>
        <section id="about" className={styles.section}>
          <About />
        </section>
        <section id="experience" className={styles.section}>
          <Experience />
        </section>
        <section id="education" className={styles.section}>
          <Education />
        </section>
        <section id="skills" className={styles.section}>
          <Skills />
        </section>
        <section id="contact" className={styles.section}>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
