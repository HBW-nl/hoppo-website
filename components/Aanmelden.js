'use client';

import { useState } from 'react';
import styles from './Aanmelden.module.css';

export default function Aanmelden() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="aanmelden" className={`section ${styles.aanmelden}`}>
      <div className="container">
        <div className={styles.aanmeldInner}>

          {/* Linker kolom: uitleg */}
          <div className={styles.aanmeldText}>
            <span className="section-tag">Op de hoogte blijven</span>
            <h2 className="section-title">
              Als eerste weten wanneer ons bier beschikbaar is?
            </h2>
            <p>
              We zijn druk aan het brouwen, aan het proeven en aan het perfectioneren.
              Meld je aan via dit formulier, zodat als we klaar zijn om het te verkopen,
              je het als eerste weet.
            </p>
            <p className={styles.verwachtTitel}>Wat je kunt verwachten:</p>
            <ul className={styles.verwachtList}>
              <li>Updates over wanneer je ons bier kunt kopen</li>
              <li>Als eerste kans om te bestellen</li>
              <li>Events van Hoppo en waar je ons kunt vinden</li>
              <li>Informatie voor ondernemers</li>
            </ul>
          </div>

          {/* Rechter kolom: formulier */}
          <div className={styles.aanmeldForm}>
            <h3 className={styles.formTitle}>Aanmelden</h3>
            <p className={styles.formSubtitle}>
              Vul je gegevens in en we houden je op de hoogte.
            </p>

            {submitted ? (
              <div className={styles.successMsg}>
                <div className={styles.successIcon}>✓</div>
                <p><strong>Je staat op de lijst!</strong></p>
                <p>We laten je als eerste weten wanneer ons bier beschikbaar is. 🍺</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} name="hoppo-aanmelden">
                <div className={styles.formGroup}>
                  <label htmlFor="voornaam">Voornaam</label>
                  <input
                    type="text"
                    id="voornaam"
                    name="voornaam"
                    placeholder="Bram"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">E-mailadres</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="bram@hoppo.nl"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="bedrijfsnaam">
                    Bedrijfsnaam <span className={styles.optioneel}>(optioneel)</span>
                  </label>
                  <input
                    type="text"
                    id="bedrijfsnaam"
                    name="bedrijfsnaam"
                    placeholder="Hoppo B.V."
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="telefoon">
                    Telefoon <span className={styles.optioneel}>(optioneel)</span>
                  </label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    placeholder="+31 6 12345678"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="info">Aanvullende informatie</label>
                  <textarea
                    id="info"
                    name="info"
                    placeholder="Vertel ons meer – ben je ondernemer, wil je bier voor een event, of wil je op een andere manier meedoen?"
                    rows={4}
                    className={styles.textarea}
                  />
                </div>
                <button type="submit" className={`btn btn-orange ${styles.formSubmit}`}>
                  Aanmelden – hou me op de hoogte!
                </button>
              </form>
            )}

            <p className={styles.formNote}>
              🔒 We sturen je geen spam. Alleen nieuws over ons bier.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
