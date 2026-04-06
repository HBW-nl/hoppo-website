import Image from 'next/image';
import styles from './Verhaal.module.css';

const verhaalBlokken = [
  {
    id: 'start',
    chapter: 'De Start',
    title: 'Oudejaarsavond 2023. Een wild idee.',
    image: '/PHOTO-2024-03-03-09-14-12.jpg',
    imageAlt: 'Vrienden rond een brouwketel',
    reverse: false,
    paragraphs: [
      'Wij zijn Arie, Jos en Bram. En dit project begon zoals de beste dingen beginnen: met een wild idee. Het was tijdens oudejaarsavond 2023, dat we met een biertje in onze handen stonden en dachten \u201ckunnen we dit niet zelf maken?\u201d. Waar de meeste idee\u00ebn stranden, stonden we deze keer niet veel later in de keuken van Jos ons eerste biertje in elkaar te knutselen.',
      'Het eerste resultaat was\u2026 leerlijk. Maar de passie voor het brouwen was zeker begonnen.',
    ],
    quote: '\u201cNa onze eerste brouwsessie rook de keuken van Jos nog een week naar hop en graan. Onze eerste brouwketel voor buiten hebben we toen maar snel aangeschaft.\u201d',
  },
  {
    id: 'wending',
    chapter: 'De Wending',
    title: 'Toen alles ineens groter werd dan bier.',
    image: '/PHOTO-2025-01-13-12-43-12 2.jpg',
    imageAlt: 'Vriendschap en samenzijn',
    reverse: true,
    paragraphs: [
      'Anderhalf jaar \u2013 en veel brouwervaring \u2013 later, kreeg de vijfjarige zoon van Jos de diagnose: diabetes type 1. Dezelfde ziekte waar Jos vanaf zijn 18e mee te maken heeft.',
      'Voor Jos veranderde er in \u00e9\u00e9n klap van alles. En voor ons ook. Onze hobby kreeg een andere wending; wat als we met de verkoop van bier iets kunnen beteken voor de genezing van diabetes type 1, zodat Moos op zijn 18e onbezorgd een biertje kan drinken?',
      'We hadden nog geen kant-en-klaar plan. Maar het eerste zaadje was geplant.',
    ],
  },
  {
    id: 'idee',
    chapter: 'Het Idee',
    title: 'Hoppo voor Stichting Don.',
    image: '/Hoppo_Logo_HR.png',
    imageAlt: 'Hoppo logo',
    reverse: false,
    paragraphs: [
      'Na veel brainstorms, onderzoek en biertjes testen, kreeg het idee vorm. De naam Hoppo ontstond; een combinatie tussen hop en hypo.',
      'Met Hoppo zamelen we geld in voor Stichting Don. Deze stichting haalt geld op en schenkt dit aan CureOne \u2013 het onderzoekscentrum dat werkt aan de daadwerkelijke genezing van diabetes type 1.',
      'In 2025 was er een historische doorbraak in het onderzoek, waardoor de genezing van diabetes type 1 vooral nog een kwestie van geld is geworden.',
    ],
    quote: '\u201cAlle opbrengsten van ons bier gaan naar Stichting Don \u2013 die zich inzet voor de genezing van diabetes type 1.\u201d',
  },
  {
    id: 'missie',
    chapter: 'De Missie',
    title: 'Moos moet op zijn 18e onbezorgd kunnen genieten van een biertje.',
    image: '/PHOTO-2026-03-20-17-24-01.jpg',
    imageAlt: 'Brouwen met een doel',
    reverse: true,
    paragraphs: [
      'Stichting Don gelooft dat diabetes type 1 daadwerkelijk genezen kan worden. Wij geloven dit ook. En wij willen er aan bijdragen, op de manier die wij kennen: door heerlijk bier te brouwen, te verkopen en de winst naar wetenschappelijk onderzoek te sturen.',
      'Van elk flesje Hoppo wat jij koopt, gaat zoveel mogelijk geld naar Stichting Don. Word jij Hoppo-vriend en help je mee met onze missie? Bekijk hieronder wat jij kunt doen!',
    ],
  },
];

export default function Verhaal() {
  return (
    <section id="verhaal" className={`section ${styles.verhaal}`}>
      <div className="container">

        <div className={`text-center ${styles.sectionHeader}`}>
          <span className="section-tag">Ons Verhaal</span>
          <h2 className="section-title">
            Drie vrienden.<br />Één ketel. Eindeloos veel plannen.
          </h2>
        </div>

        {verhaalBlokken.map((blok) => (
          <div
            key={blok.id}
            className={`${styles.storyBlock} ${blok.reverse ? styles.reverse : ''}`}
          >
            <div className={styles.storyImage}>
              <Image
                src={blok.image}
                alt={blok.imageAlt}
                width={700}
                height={blok.id === 'idee' ? 700 : 525}
                className={blok.id === 'idee' ? styles.storyImgSquare : styles.storyImg}
                loading="lazy"
              />
            </div>
            <div className={styles.storyText}>
              <span className={styles.chapter}>{blok.chapter}</span>
              <h3>{blok.title}</h3>
              {blok.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {blok.quote && (
                <blockquote className="story-quote">{blok.quote}</blockquote>
              )}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
