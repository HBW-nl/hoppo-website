'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './GoedDoel.module.css';

const segmenten = [
  { key: 'variabel', klasse: styles.balkVariabel, doel: 40,  label: '40%', dotKlasse: styles.dotVariabel, titel: '€ 1,20 – Variabele kosten',  sub: 'Label, product, verpakking & transport' },
  { key: 'vast',     klasse: styles.balkVast,     doel: 30,  label: '30%', dotKlasse: styles.dotVast,     titel: '€ 0,90 – Vaste kosten',       sub: 'Productiematerialen, marketing & verkoop' },
  { key: 'don',      klasse: styles.balkDon,      doel: 30,  label: '30%', dotKlasse: styles.dotDon,      titel: '€ 0,90 – Stichting Don',      sub: 'Rechtstreeks naar diabetesonderzoek' },
];

function useCounter(target, duur, actief) {
  const [waarde, setWaarde] = useState(0);
  useEffect(() => {
    if (!actief) return;
    let start = null;
    const stap = (ts) => {
      if (!start) start = ts;
      const voortgang = Math.min((ts - start) / duur, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - voortgang, 3);
      setWaarde(Math.round(eased * target));
      if (voortgang < 1) requestAnimationFrame(stap);
    };
    requestAnimationFrame(stap);
  }, [actief, target, duur]);
  return waarde;
}

export default function GoedDoel() {
  const sectionRef = useRef(null);
  const [geanimeerd, setGeanimeerd] = useState(false);
  const [balkBreedtes, setBalkBreedtes] = useState(segmenten.map(() => 0));

  // IntersectionObserver: start animatie zodra sectie zichtbaar is
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !geanimeerd) {
          setGeanimeerd(true);
          // Stagger de balkbreedtes
          segmenten.forEach((seg, i) => {
            setTimeout(() => {
              setBalkBreedtes(prev => {
                const nieuw = [...prev];
                nieuw[i] = seg.doel;
                return nieuw;
              });
            }, i * 180);
          });
        }
      },
      { threshold: 0.35 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [geanimeerd]);

  const vrienden = useCounter(3,  1200, geanimeerd);
  const winst    = useCounter(100, 1400, geanimeerd);

  return (
    <section id="doel" className={styles.doel} ref={sectionRef}>
      <div className="container">
        <div className={styles.doelInner}>

          {/* Linker kolom */}
          <div className={styles.doelText}>
            <div className={styles.doelIcon}>🍺</div>
            <span className={`section-tag ${styles.tag}`}>Transparantie</span>
            <h2 className="section-title light">
              Dit draag jij bij.
            </h2>
            <p>
              Elk biertje dat je drinkt, draagt direct bij aan het onderzoek naar genezing
              van Diabetes type 1. Daarin willen we zo transparant mogelijk zijn. Daarom
              zie je hier hoe de kostprijs van het biertje dat jij koopt is gebouwd.
            </p>
            <p>
              We werken samen met organisaties die het wetenschappelijk onderzoek naar
              type 1 diabetes financieren – zodat elk euro echt terechtkomt waar het
              moet zijn.
            </p>

            <div className={styles.statRow}>
              <div className={styles.stat}>
                <strong>{winst}%</strong>
                <span>winst naar onderzoek</span>
              </div>
            </div>
          </div>

          {/* Rechter kolom: prijsopbouw */}
          <div className={`${styles.doelVisual} ${geanimeerd ? styles.zichtbaar : ''}`}>

            <div className={styles.bierHeader}>
              <span className={styles.bierEmoji}>🍺</span>
              <div>
                <p className={styles.bierLabel}>Per biertje</p>
                <p className={styles.bierPrijs}>€ 3,00</p>
              </div>
            </div>

            {/* Gesegmenteerde balk */}
            <div className={styles.balk}>
              {segmenten.map((seg, i) => (
                <div
                  key={seg.key}
                  className={`${styles.balkSegment} ${seg.klasse}`}
                  style={{
                    width: `${balkBreedtes[i]}%`,
                    transition: `width 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.18}s`,
                  }}
                >
                  {balkBreedtes[i] > 5 && seg.label}
                </div>
              ))}
            </div>

            {/* Legenda */}
            <div className={styles.legenda}>
              {segmenten.map((seg, i) => (
                <div
                  key={seg.key}
                  className={`${styles.legendaItem} ${geanimeerd ? styles.legendaIn : ''}`}
                  style={{ animationDelay: `${0.4 + i * 0.15}s` }}
                >
                  <span className={`${styles.legendaDot} ${seg.dotKlasse}`} />
                  <div>
                    <strong>{seg.titel}</strong>
                    <p>{seg.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#aanmelden" className={styles.doelLink}>
              Blijf op de hoogte →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
