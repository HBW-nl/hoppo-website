import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">

        <div className={styles.footerTop}>

          {/* Merk */}
          <div className={styles.footerBrand}>
            <Image
              src="/Hoppo_Logo_HR.png"
              alt="Hoppo logo"
              width={220}
              height={88}
              className={styles.footerLogo}
            />
            <p>Zorgeloos genieten.</p>
          </div>

          {/* Navigatie */}
          <div className={styles.footerCol}>
            <h4>Navigatie</h4>
            <ul>
              <li><a href="#verhaal">Ons Verhaal</a></li>
              <li><a href="#doel">Stichting Don</a></li>
              <li><a href="#helpen">Doe mee</a></li>
              <li><a href="#aanmelden">Aanmelden</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerCol}>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hallo@hoppo.nl">hallo@hoppo.nl</a></li>
              <li><a href="#">Instagram @hoppo.bier</a></li>
              <li><a href="#">KvK: 12345678 (placeholder)</a></li>
            </ul>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <p>© 2026 Hoppo Bierbrouwerij. Alle rechten voorbehouden.</p>
          <p>
            Gemaakt met <span className={styles.heart}>♥</span> en hop.
          </p>
        </div>

      </div>
    </footer>
  );
}
