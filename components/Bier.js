import Image from 'next/image';
import styles from './Bier.module.css';

const bieren = [
  {
    id: 'batch01',
    batch: 'Batch #01',
    type: 'IPA',
    alc: '6,5% alc.',
    naam: 'Eerste Zet IPA',
    beschrijving:
      'Onze debuutbatch. Fruitig, bitter met een knipoog – net zoals wij. Uitgesproken hopkarakter, een vleugje mango en een droge afdronk. De batch die alles in gang zette.',
    prijs: '€ 3,50',
    eenheid: '/ fles (33cl)',
    image: 'https://picsum.photos/seed/ipa1/600/400',
    imageAlt: 'Hoppo Batch #01 – IPA',
  },
  {
    id: 'batch02',
    batch: 'Batch #02',
    type: 'Amber Ale',
    alc: '4,8% alc.',
    naam: 'Amber Sessie',
    beschrijving:
      'Lekker drinkbaar, laag in alcohol – perfect voor een langere avond. Karamelzoet, een tik noot, en precies genoeg bitterheid om wakker te blijven. Sessie-bier op z\'n best.',
    prijs: '€ 3,00',
    eenheid: '/ fles (33cl)',
    image: 'https://picsum.photos/seed/amber2/600/400',
    imageAlt: 'Hoppo Amber Sessie',
  },
  {
    id: 'batch03',
    batch: 'Batch #03',
    type: 'Saison',
    alc: '5,9% alc.',
    naam: 'Saison de Jos',
    beschrijving:
      'Vernoemd naar de man met de meeste reden om te vieren als dit doel bereikt wordt. Kruidig, sprankelend, met sinaasappelschil en koriander. Het bier voor als er écht iets te vieren valt.',
    prijs: '€ 3,75',
    eenheid: '/ fles (33cl)',
    image: 'https://picsum.photos/seed/saison3/600/400',
    imageAlt: 'Saison de Jos',
  },
];

export default function Bier() {
  return (
    <section id="bier" className={`section ${styles.bier}`}>
      <div className="container">

        <div className={`text-center ${styles.bierHeader}`}>
          <span className="section-tag">Ons Bier</span>
          <h2 className="section-title">
            Gebrouwen met zorg.<br />Gedronken voor een doel.
          </h2>
          <p className="section-lead">
            Elke batch is een experiment, een avontuur en een liefdadigheidsactie tegelijk.
            Hier is wat er in de pijplijn zit.
          </p>
        </div>

        <div className={styles.bierGrid}>
          {bieren.map((bier) => (
            <div key={bier.id} className={styles.bierCard}>
              <div className={styles.bierCardImgWrap}>
                <Image
                  src={bier.image}
                  alt={bier.imageAlt}
                  width={600}
                  height={400}
                  className={styles.bierCardImg}
                  loading="lazy"
                />
                <span className={styles.bierBadge}>{bier.batch}</span>
              </div>
              <div className={styles.bierCardBody}>
                <div className={styles.bierCardMeta}>
                  <span className={`${styles.bierPill} ${styles.type}`}>{bier.type}</span>
                  <span className={`${styles.bierPill} ${styles.alc}`}>{bier.alc}</span>
                </div>
                <h3>{bier.naam}</h3>
                <p>{bier.beschrijving}</p>
                <div className={styles.bierCardFooter}>
                  <div className={styles.bierPrice}>
                    {bier.prijs} <span>{bier.eenheid}</span>
                  </div>
                  <a href="#aanmelden" className={`btn btn-orange ${styles.meerInfoBtn}`}>
                    Meer info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.bierSoon}>
          Binnenkort beschikbaar in jouw buurt. Meld je aan en wij laten je als eerste
          weten wanneer je kunt bestellen.
        </p>

      </div>
    </section>
  );
}
