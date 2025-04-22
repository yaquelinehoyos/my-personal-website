import React from 'react';
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Me</h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Get in Touch</h3>
            <p>Feel free to reach out to me through any of these channels:</p>
            <div className={styles.contactMethods}>
              <div className={styles.contactItem}>
                <span className={styles.label}>Email:</span>
                <a href="mailto:yaqueline150@gmail.com" className={styles.link}>
                  yaqueline150@gmail.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.label}>LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/yaquelinehoyos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  LinkedIn
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.label}>GitHub:</span>
                <a
                  href="https://github.com/yaquelinehoyos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GitHub
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.label}>Location:</span>
                <span className={styles.location}>Berlin, Germany</span>
              </div>
            </div>
          </div>
          
          <div className={styles.mapSection}>
            <h3>Let's have a coffee! ☕️</h3>
            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.409041997928!2d13.424951776891454!3d52.52000697937954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sFriedrichshain%2C%20Berlin-Friedrichshain-Kreuzberg%2C%20Germany!5e0!3m2!1sen!2sus!4v1710861234567!5m2!1sen!2sus"
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Friedrichshain, Berlin-Friedrichshain-Kreuzberg, Germany"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
