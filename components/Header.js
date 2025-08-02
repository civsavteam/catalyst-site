import { useState } from 'react';
import Link from 'next/link';

/**
 * Site header component
 *
 * This component renders the top navigation bar with the Catalyst logo and
 * primary navigation links. A mobile menu is provided for smaller screens.
 * Navigation items are currently hard coded but could be sourced from
 * Sanity in the future. The header makes use of Tailwind's utility
 * classes for spacing, colours and responsive behaviour.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
          {/*
            The logo is represented with text here to avoid hard coding an
            external image. Swap this with an <Image> component from
            `next/image` and import a local SVG or PNG of your logo when
            available. For example:
            <Image src="/images/logo.svg" width={120} height={40} alt="Catalyst logo" />
          */}
          <span>Catalyst</span>
        </Link>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/markets" className="hover:text-primary">Markets</Link>
          <Link href="/brands" className="hover:text-primary">Brands</Link>
          <Link href="/solutions" className="hover:text-primary">Solutions</Link>
          <Link href="/insights" className="hover:text-primary">Insights</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </nav>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile navigation panel */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/about" className="block py-2 text-sm hover:text-primary" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/markets" className="block py-2 text-sm hover:text-primary" onClick={() => setMenuOpen(false)}>Markets</Link>
            <Link href="/brands" className="block py-2 text-sm hover:text-primary" onClick={() => setMenuOpen(false)}>Brands</Link>
            <Link href="/solutions" className="block py-2 text-sm hover:text-primary" onClick={() => setMenuOpen(false)}>Solutions</Link>
            <Link href="/insights" className="block py-2 text-sm hover:text-primary" onClick={() => setMenuOpen(false)}>Insights</Link>
            <Link href="/contact" className="block py-2 text-sm hover:text-primary" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}