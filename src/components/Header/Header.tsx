import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'about', 'experience', 'education', 'skills', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100; // Adjust this value based on your header height
          
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 30; // Match the $header-height variable
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close menu after clicking a link on mobile
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <button 
          onClick={() => scrollToSection('profile')}
          className={activeSection === 'profile' ? styles.active : ''}
        >
          Profile
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          className={activeSection === 'about' ? styles.active : ''}
        >
          How I work
        </button>
        <button 
          onClick={() => scrollToSection('experience')}
          className={activeSection === 'experience' ? styles.active : ''}
        >
          Experience
        </button>
        <button 
          onClick={() => scrollToSection('education')}
          className={activeSection === 'education' ? styles.active : ''}
        >
          Education
        </button>
        <button 
          onClick={() => scrollToSection('skills')}
          className={activeSection === 'skills' ? styles.active : ''}
        >
          Skills
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className={activeSection === 'contact' ? styles.active : ''}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header; 