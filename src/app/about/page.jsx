import Link from 'next/link';
import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.column}>
          <h1 className={styles.header}>About us</h1>
          <p className={styles.text}>
            Futurebound is a personal project of mine. 
            Although it's small in scale, I take great pride in it. 
            This platform serves as a canvas for me to document my journey, share my story, 
            and offer insights with the world, while also having the privilege of observing yours. 
            I hope you find the content I create both enjoyable and useful.
            As time goes on, I plan to expand this platform further, so stay tuned for updates. 
            I acknowledge that the website may not have the most professional appearance at the moment, 
            but rest assured, improvements are in the works!
          </p>
        </div>
        <div className={styles.image}>
          <Image 
            src="/definition.png" 
            width={550} 
            height={550} 
            alt="dictionary" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
