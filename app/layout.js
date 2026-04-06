import './globals.css';

export const metadata = {
  title: 'Hoppo – Bier brouwen voor een groter doel',
  description:
    'Hoppo is een ambachtelijke bierbrouwerij van drie vrienden. 100% van onze winst gaat naar onderzoek naar diabetes type 1.',
  openGraph: {
    title: 'Hoppo – Bier brouwen voor een groter doel',
    description:
      'Ambachtelijk bier, gebrouwen met vriendschap. Verkocht voor een doel.',
    siteName: 'Hoppo Bierbrouwerij',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
