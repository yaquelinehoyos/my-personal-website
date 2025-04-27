import React from 'react';
import styles from './Profile.module.scss';
import profilePhoto from '../../assets/Profile-photo.jpeg';
import resumePdf from '../../assets/Yaqueline-Hoyos-Resume.pdf';

const Profile: React.FC = () => {
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Yaqueline-Hoyos-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className={styles.profile}>
        <div className={styles.header}>
          <div className={styles.greeting}>Hola 👋 I'm Yaqueline Hoyos</div>
          <div className={styles.headerText}>A Frontend Developer with experience in AI companies. <span className={styles.highlight}>Focused on turning complex ideas into intuitive experiences.</span></div>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.contentWrapper}>
              <div className={styles.textContent}>
                <p>Originally from Medellín, Colombia, I'm now living in Berlin. I moved here to grow in an international tech scene, and I found exactly what I was looking for. Berlin is full of energy, creativity and diversity. I love how the city blends work and life: coding by day, exploring cafés and meeting people from around the world in the afternoon. In this vibrant enviroment, I stick to my philosophy:</p>
                <p className={styles.philosophy}>In a world where you can be as you want to be, choose to be kind.</p>
                <button className={styles.button} onClick={handleDownloadResume}>Download CV</button>
              </div>
              <div className={styles.photoContainer}>
                <img src={profilePhoto} alt="Profile" className={styles.photo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile; 