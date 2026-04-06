import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Bellenanimatie */}
      <div className={styles.bubbles} aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={styles.bubble} />
        ))}
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            Samen voor genezing van diabetes type 1 
          </span>
          <h1 className={styles.title}>
            Bier brouwen voor een <span className={styles.accent}>groter</span> doel.
          </h1>
          <p className={styles.sub}>
            Hoppo is geboren uit vriendschap, passie voor bier – en de wens dat
            Moos op zijn 18e onbezorgd een biertje kan drinken.
          </p>
          <div className={styles.actions}>
            <a href="#verhaal" className="btn btn-orange">Ons verhaal</a>
            <a href="#aanmelden" className="btn btn-outline-white">Meld je aan</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        Scroll
        <div className={styles.scrollArrow} />
      </div>
    </section>
  );
}
