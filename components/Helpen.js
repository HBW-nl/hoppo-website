import styles from './Helpen.module.css';

const manieren = [
  {
    id: 'verkoop',
    icon: '🍺',
    titel: 'Via verkoop',
    subtitel: 'Koop Hoppo voor jouw feest, kantine of event',
    tekst:
      'Je koopt Hoppo bier voor een feest, kantine of event. Van elk biertje dat je koopt, gaat minimaal 30% naar Stichting Don. Hoe meer Hoppo er gedronken wordt, des te groter de impact.',
  },
  {
    id: 'schenking',
    icon: '💛',
    titel: 'Via schenking',
    subtitel: 'Hoppo vergroot jouw donatie',
    tekst:
      'Je doneert aan Hoppo en wij zorgen ervoor dat dit goed besteedt wordt aan inkoop van nieuwe voorraad, apparatuur of marketing. Als donateur van Hoppo ontvang je exclusieve voordelen. Zo ontvang je bijvoorbeeld early access op nieuwe biersmaken of kunnen we (in overleg) langskomen op jouw bedrijfsfeest.',
  },
  {
    id: 'goederen',
    icon: '📦',
    titel: 'Via goederen',
    subtitel: 'Lagere kosten = meer impact',
    tekst:
      'Door vaste kosten te verlagen, gaat een groter deel van elke bierverkoop naar het goede doel. Denk hierbij aan het beschikbaar stellen van een brouwerij of opslag, grondstoffen, promotiemateriaal of meehelpen als vrijwilliger.',
  },
  {
    id: 'netwerk',
    icon: '🔗',
    titel: 'Via netwerk',
    subtitel: 'Laat de olievlek zo groot mogelijk worden',
    tekst:
      'Deel ons verhaal met jouw netwerk. Meer zichtbaarheid betekent meer verkoop en lagere kosten per biertje. Denk aan: influencers, netwerkborrels, media of beurzen. Elk nieuw contact vergroot de impact.',
  },
];

export default function Helpen() {
  return (
    <section id="helpen" className={`section ${styles.helpen}`}>
      <div className="container">

        <div className={`text-center ${styles.header}`}>
          <span className="section-tag">Doe mee</span>
          <h2 className="section-title">Hoe jij ons kunt helpen</h2>
          <p className="section-lead" style={{ margin: '0 auto' }}>
            Er zijn vier manieren om bij te dragen aan onze missie – zodat je kunt kiezen wat bij jou past.
          </p>
        </div>

        <div className={styles.grid}>
          {manieren.map((m) => (
            <div key={m.id} className={styles.kaart}>
              <div className={styles.kaartIcon}>{m.icon}</div>
              <h3 className={styles.kaartTitel}>{m.titel}</h3>
              <p className={styles.kaartSubtitel}>{m.subtitel}</p>
              <p className={styles.kaartTekst}>{m.tekst}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Interesse? Neem contact met ons op en we bespreken wat het beste bij jou past.</p>
          <a href="#aanmelden" className="btn btn-orange">Meld je aan</a>
        </div>

      </div>
    </section>
  );
}
