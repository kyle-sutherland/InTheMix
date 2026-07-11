'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Event Bartending', href: '/event-bartending' },
  { label: 'Consulting', href: '/consulting' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--color-ink)',
        color: '#f4eee5',
      }}>
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '0.2rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}>
        <div
          className='nav-logo'
          style={{
            justifyContent: 'flex-start',
            height: '100px',
            width: '248px',
            position: 'relative',
          }}>
          <Link
            href='/'
            style={{
              alignItems: 'center',
              gap: '0.7rem',
              textDecoration: 'none',
            }}>
            <Image
              src='/In-The-Mix(teal).svg'
              alt='In The Mix logo'
              fill
              style={{
                display: 'block',
                overflow: 'hidden',
                objectFit: 'cover',
              }}
            />
          </Link>
        </div>
        <nav
          className='nav-desktop'
          style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? 'active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href='/contact'
          className='nav-cta-desktop'
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.6rem 1.2rem',
            border: '1px solid var(--color-accent)',
            color: 'var(--color-accent)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontWeight: 500,
          }}>
          Get in touch
        </Link>

        <button
          onClick={() => setOpen(!open)}
          aria-label='Toggle menu'
          className='nav-hamburger'
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#e0d8cf',
            fontSize: '1.5rem',
            padding: '0.5rem',
          }}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav
          style={{
            background: '#111',
            padding: '1rem 1.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className='nav-link'
              onClick={() => setOpen(false)}
              style={{ fontSize: '0.95rem' }}>
              {l.label}
            </Link>
          ))}
          <Link
            href='/contact'
            className='nav-link'
            onClick={() => setOpen(false)}
            style={{ fontSize: '0.95rem', color: 'var(--color-accent)' }}>
            Get in touch
          </Link>
        </nav>
      )}

      <style>{`
        .nav-desktop, .nav-cta-desktop { display: flex; }
        .nav-hamburger { display: none; }
        @media (max-width: 900px) {
          .nav-desktop, .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
