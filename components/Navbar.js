'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navInner}`}>

        {/* Logo */}
        <a href="#" className={styles.navLogo}>
          <Image
            src="/Hoppo_Logo_HR.png"
            alt="Hoppo – ambachtelijke bierbrouwerij"
            width={140}
            height={56}
            priority
            className={styles.logoImg}
          />
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.navToggle} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li><a href="#verhaal" onClick={closeMenu}>Ons Verhaal</a></li>
          <li><a href="#doel"    onClick={closeMenu}>Stichting Don</a></li>
          <li><a href="#helpen" onClick={closeMenu}>Doe mee</a></li>
        </ul>

        {/* CTA */}
        <a href="#aanmelden" className={`btn btn-orange ${styles.navCta}`}>
          Aanmelden
        </a>

      </div>
    </nav>
  );
}
