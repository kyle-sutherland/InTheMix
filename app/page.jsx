import Image from 'next/image';
import SectionHeading from '../components/section-heading';
import { Button } from '../components/button';
import EventForm from '../components/forms/event-form';
import ConsultingForm from '../components/forms/consulting-form';

const container = { maxWidth: '1180px', margin: '0 auto', padding: '0 2rem' };

export default function HomePage() {
  return (
    <>
      {/* HERO — editorial split */}
      <section
        style={{
          padding: 0,
          background: 'var(--color-ink)',
          color: '#f4eee5',
          overflow: 'hidden',
        }}>
        <div
          className='hero-grid'
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            minHeight: '86vh',
          }}>
          {/* Left: text */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '4rem',
              position: 'relative',
            }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '0.72rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#a89a86',
              }}>
              <span
                style={{
                  width: 32,
                  height: 1,
                  background: 'var(--color-accent)',
                }}
              />
              Calgary &nbsp;·&nbsp; Est. 2023
            </div>

            <div>
              <p
                className='h-script'
                style={{
                  color: 'var(--color-hover-soft)',
                  fontSize: '2.4rem',
                  marginBottom: '0.5rem',
                }}>
                Pride in the pour.
              </p>
              <h1
                className='h-display'
                style={{
                  color: '#f4eee5',
                  fontSize: 'clamp(3.4rem, 6vw, 6rem)',
                  fontWeight: 300,
                }}>
                Crafted cocktails,
                <br />
                <em
                  style={{
                    fontStyle: 'italic',
                    color: 'var(--color-accent)',
                    fontWeight: 400,
                  }}>
                  thoughtful
                </em>{' '}
                hospitality.
              </h1>
              <p
                style={{
                  maxWidth: '460px',
                  color: '#c4b9a7',
                  lineHeight: 1.7,
                  marginTop: '1.75rem',
                  fontSize: '1.02rem',
                }}>
                Event bartending and consulting built around how service
                actually runs — from the first pour to the last guest in the
                door.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '2.25rem',
                  flexWrap: 'wrap',
                }}>
                <Button
                  href='/contact'
                  variant='light'>
                  Request a quote
                </Button>
                <Button
                  href='/about'
                  style={{ borderColor: '#3a2e22', color: '#c4b9a7' }}>
                  About Robyn →
                </Button>
              </div>
            </div>
          </div>

          {/* Right: image w/ floating quote */}
          <div style={{ position: 'relative', background: '#0d0a07' }}>
            <Image
              src='/group-drinks.jpg'
              alt=''
              fill
              style={{ objectFit: 'cover', opacity: 0.92 }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '2.5rem',
                left: '-3rem',
                background: 'var(--color-cream)',
                padding: '1.5rem 1.75rem',
                maxWidth: 280,
                borderLeft: '3px solid var(--color-accent)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
              }}>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--color-ink)',
                  fontSize: '1.05rem',
                  lineHeight: 1.4,
                  margin: '0 0 0.75rem',
                }}>
                &ldquo;Polished, organized, and the cocktails were the talk of
                the night.&rdquo;
              </p>
              <p
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                  margin: 0,
                }}>
                — Wedding, Sept &apos;25
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{ background: 'var(--color-cream)', padding: '6rem 0' }}>
        <div style={container}>
          <SectionHeading>What we do</SectionHeading>
          <p
            style={{
              textAlign: 'center',
              maxWidth: '620px',
              margin: '0 auto 4rem',
              color: 'var(--color-text)',
              fontSize: '1.05rem',
            }}>
            Two services, one philosophy: hospitality that&apos;s structured,
            calm, and built to perform when it matters.
          </p>

          <div
            className='grid-2'
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'start',
            }}>
            {/* Event Bartending */}
            <div>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  marginBottom: '1.75rem',
                }}>
                <Image
                  src='/drink1.jpg'
                  alt='Event bartending'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h2
                className='h-serif'
                style={{ fontSize: '2.1rem', marginBottom: '0.75rem' }}>
                Event Bartending
              </h2>
              <p style={{ color: 'var(--color-text)', marginBottom: '1rem' }}>
                Elevated bar service designed to bring both professionalism and
                personality to your event. Custom cocktail menus, seamless
                behind the bar, polished from the first pour to the last.
              </p>
              <p style={{ color: 'var(--color-text)', marginBottom: '1.5rem' }}>
                Whether you&apos;re hosting a wedding, corporate event, or
                private celebration, every bar program is structured for smooth
                service and great cocktails.
              </p>
              <Button href='/event-bartending'>Explore packages</Button>
            </div>

            {/* Consulting */}
            <div style={{ marginTop: '4rem' }}>
              <h2
                className='h-serif'
                style={{ fontSize: '2.1rem', marginBottom: '0.75rem' }}>
                Hospitality Consulting
              </h2>
              <p style={{ color: 'var(--color-text)', marginBottom: '1rem' }}>
                Great hospitality experiences don&apos;t happen by accident —
                they&apos;re built with intention behind the scenes. Menus,
                beverage programs, and operational systems designed to support
                smooth, consistent service.
              </p>
              <p style={{ color: 'var(--color-text)', marginBottom: '1.5rem' }}>
                From concept development to menu design and workflow planning,
                the focus is the same: programs that look great on paper and
                perform just as well in real service.
              </p>
              <Button href='/consulting'>Explore consulting</Button>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  marginTop: '2rem',
                }}>
                <Image
                  src='/drink2.jpg'
                  alt='Hospitality consulting'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section
        style={{ background: 'var(--color-cream-deep)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <p
            className='h-script'
            style={{
              color: 'var(--color-accent)',
              fontSize: '2rem',
              marginBottom: '1rem',
            }}>
            on hospitality
          </p>
          <p
            className='h-serif'
            style={{
              fontStyle: 'italic',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              lineHeight: 1.3,
              color: 'var(--color-ink)',
            }}>
            &ldquo;Service should be attentive, efficient, and personable. Every
            detail should support the overall experience. Good service should
            feel effortless.&rdquo;
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id='contact'
        style={{ background: 'var(--color-cream)', padding: '6rem 0' }}>
        <div style={container}>
          <SectionHeading>Contact us</SectionHeading>
          <p
            style={{
              textAlign: 'center',
              maxWidth: 620,
              margin: '0 auto 3.5rem',
              color: 'var(--color-text)',
            }}>
            Have a question or ready to get started? Whether you&apos;re
            planning an event or exploring consulting services, share a few
            details and we&apos;ll be in touch soon.
          </p>

          <div
            className='grid-2'
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
            }}>
            <div className='card'>
              <p
                className='h-eyebrow'
                style={{ marginBottom: '0.5rem' }}>
                Event Bartending
              </p>
              <h3
                className='h-serif'
                style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                Tell us about your event
              </h3>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--color-text)',
                  marginBottom: '1.75rem',
                }}>
                Planning an event? Share a few details and we&apos;ll follow up
                with availability and next steps.
              </p>
              <EventForm />
            </div>
            <div className='card'>
              <p
                className='h-eyebrow'
                style={{ marginBottom: '0.5rem' }}>
                Hospitality Consulting
              </p>
              <h3
                className='h-serif'
                style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                Tell us about your project
              </h3>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--color-text)',
                  marginBottom: '1.75rem',
                }}>
                Tell us a little about your project and we&apos;ll be in touch
                to discuss how we can help.
              </p>
              <ConsultingForm />
            </div>
          </div>
        </div>
      </section>

      {/* responsive */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .grid-2 { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </>
  );
}
