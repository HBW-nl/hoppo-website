import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Verhaal from '@/components/Verhaal';
import GoedDoel from '@/components/GoedDoel';
import Helpen from '@/components/Helpen';
import Aanmelden from '@/components/Aanmelden';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Verhaal />
        <GoedDoel />
        <Helpen />
        <Aanmelden />
      </main>
      <Footer />
    </>
  );
}
