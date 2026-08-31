import { useState, type FormEvent } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Instagram,
  Linkedin,
  Menu,
  MoveRight,
  PackageCheck,
  ShieldCheck,
  Truck,
  X,
} from 'lucide-react';
import warehouseImage from '@assets/ddhaul-warehouse.jpg';
import officialLogo from '@assets/DDHAUL_2_1788203812107.jpeg';
import truckImage from '@assets/ddhaul-truck.jpg';
import storageImage from '../attached_assets/generated_images/secure-storage.jpg';

const WHATSAPP_NUMBER = '2349080000196';
const WHATSAPP_DISPLAY = '0908 000 0196';
const WHATSAPP_GREETING = 'Hello DD Haul, I would like to plan a move.';

function whatsappHref(text = WHATSAPP_GREETING) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.77.46 3.5 1.34 5.02L2 22l5.1-1.34a10 10 0 0 0 4.94 1.26h.01c5.53 0 10.02-4.49 10.02-10.02 0-2.68-1.04-5.2-2.92-7zM12.05 20.11h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.03.8.81-2.95-.19-.3a8.1 8.1 0 0 1-1.24-4.33c0-4.48 3.65-8.13 8.14-8.13 2.17 0 4.21.85 5.75 2.39a8.08 8.08 0 0 1 2.38 5.75c0 4.48-3.65 8.13-8.18 8.13m4.47-6.09c-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.29.37-.43.12-.14.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.2 3.7.59.25 1.04.41 1.4.52.59.18 1.12.16 1.54.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28" />
    </svg>
  );
}

type Service = {
  index: string;
  title: string;
  description: string;
  icon: 'truck' | 'package' | 'shield';
  large?: boolean;
};

const services: Service[] = [
  {
    index: '01 / 05',
    title: 'Business logistics',
    description: 'A considered 3PL partner for the movement that keeps your operation moving.',
    icon: 'truck',
    large: true,
  },
  {
    index: '02 / 05',
    title: 'Home & office',
    description: 'A steady pair of hands for removals, relocation, and everything in between.',
    icon: 'package',
  },
  {
    index: '03 / 05',
    title: 'Event vendor logistics',
    description: 'The calm behind the scenes for decorators, caterers, drinks vendors, and crews.',
    icon: 'shield',
  },
  {
    index: '04 / 05',
    title: 'Haulage & distribution',
    description: 'Planned routes and dependable movement across the regions you serve.',
    icon: 'truck',
  },
  {
    index: '05 / 05',
    title: 'Storage & truck rental',
    description: 'Secure short-term storage and capable vehicles, when timing needs room.',
    icon: 'shield',
  },
];

const audiences = [
  ['01', 'Households', 'From first box to final room, your things are handled with respect.'],
  ['02', 'Businesses', 'Move offices, stock, and equipment without losing the working day.'],
  ['03', 'Event vendors', 'Get the right gear to the right venue, ready for set-up.'],
  ['04', 'Supply-chain teams', 'A reliable movement layer for goods headed to major retailers.'],
];

function Logo() {
  return (
    <a className="logo" href="#top" data-testid="link-logo">
      <span className="logo-lockup">
        <img className="brand-logo" src={officialLogo} alt="DD Haul official logo" data-testid="img-official-logo" />
        <span className="logo-companion"><strong>DD Haul</strong><small>Moving &amp; logistics</small></span>
      </span>
    </a>
  );
}

function ServiceIcon({ type }: { type: Service['icon'] }) {
  if (type === 'truck') return <Truck size={21} strokeWidth={1.5} />;
  if (type === 'package') return <PackageCheck size={21} strokeWidth={1.5} />;
  return <ShieldCheck size={21} strokeWidth={1.5} />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const details = String(form.get('details') || '').trim();
    const message = [
      'Hello DD Haul, I would like to plan a move.',
      '',
      `Name: ${String(form.get('name') || '').trim()}`,
      `Phone: ${String(form.get('phone') || '').trim()}`,
      `Help with: ${String(form.get('move-type') || '').trim()}`,
      `Location: ${String(form.get('location') || '').trim()}`,
      details ? `Details: ${details}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(whatsappHref(message), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <>
    <div className="dd-page" id="top">
      <div className="topline">
        <div className="container topline-inner">
          <span className="mono">Lagos · South West · South South · South East</span>
          <span className="mono">Talk to a moving partner <a href="tel:+2349080000196" data-testid="link-top-phone">0908 000 0196</a> · <a href={whatsappHref()} target="_blank" rel="noreferrer" data-testid="link-top-whatsapp">WhatsApp</a></span>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <Logo />
          <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu} data-testid="link-nav-services">What we move</a>
            <a href="#approach" onClick={closeMenu} data-testid="link-nav-approach">Our approach</a>
            <a href="#contact" onClick={closeMenu} data-testid="link-nav-contact">Contact</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu} data-testid="link-nav-quote">Get a quote <ArrowRight size={14} /></a>
          </nav>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy reveal">
              <div className="eyebrow mono">The move, handled properly</div>
              <h1 id="hero-title">Moving <em>made</em> easy.</h1>
              <p className="hero-description">DD Haul is the calm, capable logistics partner behind a move that goes exactly right — from one home to a whole supply chain.</p>
              <div className="hero-actions">
                <a href="#contact" className="button button-primary" data-testid="link-hero-quote">Plan your move <MoveRight size={16} /></a>
                <a href={whatsappHref()} className="button button-ghost" target="_blank" rel="noreferrer" data-testid="link-hero-whatsapp">WhatsApp us <WhatsAppIcon size={16} /></a>
              </div>
            </div>
            <div className="hero-visual reveal">
              <img className="hero-photo" src={warehouseImage} alt="DD Haul workers loading branded red trucks at a warehouse loading dock" data-testid="img-hero-warehouse" />
              <div className="hero-photo-frame" />
              <div className="hero-stamp"><span className="mono">Moving<br />since<br /><strong>2012</strong></span></div>
            </div>
          </div>
          <div className="scroll-note mono"><span className="scroll-line" /> Scroll to see how</div>
        </section>

        <div className="marquee" aria-label="DD Haul capabilities">
          <div className="marquee-track">
            {['Home removals', '3PL', 'Event logistics', 'Packing & wrapping', 'Haulage', 'Secure storage', 'Distribution'].map((item) => (
              <span className="marquee-item mono" key={item}>{item}</span>
            ))}
          </div>
        </div>

        <section className="intro section-pad" id="about" aria-labelledby="intro-title">
          <div className="container intro-grid">
            <div className="reveal">
              <div className="eyebrow mono">Why DD Haul</div>
              <h2 id="intro-title">Strong enough for the <em>big picture.</em> Careful enough for the details.</h2>
            </div>
            <div className="intro-copy reveal">
              <p>Every move has a moving part that matters more than the rest. A glass cabinet. A market deadline. An event that starts at 4pm. A retail shelf that cannot be empty.</p>
              <p>Since 2012, DD Haul has brought the same practical discipline to homes, offices, events, and the flow of goods between them. We plan the route, protect what is being moved, and keep the handover clear.</p>
              <div className="signature"><span className="signature-line" /><span className="mono">Lagos, Nigeria · Built for the journey</span></div>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow mono">One partner, many routes</div>
                <h2 id="services-title">Whatever needs moving, start here.</h2>
              </div>
              <p>From a careful single-home relocation to weekly goods movement for supply-chain organisations, our capabilities meet the moment.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className={`service-card${service.large ? ' large' : ''} reveal`} key={service.index} data-testid={`card-service-${service.index.split(' ')[0]}`}>
                  <div>
                    <div className="service-icon"><ServiceIcon type={service.icon} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="service-index mono">{service.index}</span>
                  <ArrowDownRight className="service-arrow" size={20} strokeWidth={1.5} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="statement" aria-label="DD Haul promise">
          <div className="container statement-inner">
            <div className="mono reveal">The DD Haul standard</div>
            <div className="reveal">
              <h2>Less disruption.<br /><em>More done.</em></h2>
              <p>Good logistics is felt in the things that do not happen: the missed window, the damaged item, the last-minute scramble. We work to make the whole move feel lighter.</p>
            </div>
          </div>
        </section>

        <section className="process section-pad" id="approach" aria-labelledby="process-title">
          <div className="container process-layout">
            <div className="process-intro reveal">
              <div className="eyebrow mono">Our approach</div>
              <h2 id="process-title">A clear plan is half the move.</h2>
              <p>No guesswork, no disappearing act. You get a considered process and a partner who stays close to the details.</p>
            </div>
            <div className="steps reveal">
              <div className="step">
                <span className="step-no mono">01</span>
                <div><h3>Tell us what is moving</h3><p>Share the destination, timing, volume, access, and anything that needs special care.</p></div>
                <ChevronDown size={18} strokeWidth={1.5} />
              </div>
              <div className="step">
                <span className="step-no mono">02</span>
                <div><h3>We shape the route</h3><p>We match the job with the right people, vehicle, packing approach, and practical plan.</p></div>
                <ChevronDown size={18} strokeWidth={1.5} />
              </div>
              <div className="step">
                <span className="step-no mono">03</span>
                <div><h3>Your move gets moving</h3><p>Items are wrapped, loaded, transported, and handed over with care and clarity.</p></div>
                <Check size={18} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </section>

        <section className="field-note section-pad" aria-labelledby="field-title">
          <div className="container field-grid">
            <div className="field-image field-image-truck reveal">
              <img src={truckImage} alt="Front of a DD Haul red truck with chrome grille and Ddhaul Trucking branding" loading="lazy" data-testid="img-fleet-capability" />
              <div className="field-image-label"><span className="mono">On the ground</span><p>A capable fleet for the goods, equipment, and spaces that keep Lagos moving.</p></div>
            </div>
            <div className="field-copy reveal">
              <div className="eyebrow mono">Beyond the box</div>
              <h2 id="field-title">The details are <em>the job.</em></h2>
              <p>We know a move is more than a vehicle and a destination. It is timing, access, wrapping, loading, unloading, and the confidence that somebody is keeping an eye on the whole picture.</p>
              <div className="field-stat">
                <div className="stat"><strong>360°</strong><span>Moving support<br />from start to finish</span></div>
                <div className="stat"><strong>3PL</strong><span>Built for<br />business movement</span></div>
              </div>
              <a href="#contact" className="button button-ghost" style={{ marginTop: 43 }} data-testid="link-field-contact">Talk through your move <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="audience section-pad" aria-labelledby="audience-title">
          <div className="container audience-grid">
            <div className="audience-copy reveal">
              <div className="eyebrow mono">Made for the real world</div>
              <h2 id="audience-title">One standard of care. Every kind of move.</h2>
              <p>Different jobs, same expectation: things arrive as planned, ready for what happens next.</p>
            </div>
            <div className="audience-list reveal">
              {audiences.map(([number, title, description]) => (
                <div className="audience-item" key={number} data-testid={`item-audience-${number}`}>
                  <span className="mono">{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                  <ArrowRight size={17} strokeWidth={1.5} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="field-note storage-feature" aria-label="Storage feature">
          <div className="container field-grid">
            <div className="field-copy reveal">
              <div className="eyebrow mono">When the timing changes</div>
              <h2>A little more <em>room</em> for the plan.</h2>
              <p>Short-term storage keeps the in-between from becoming a problem. A secure pause for household items, office equipment, event materials, or stock in transit.</p>
              <a href="#contact" className="button button-primary" style={{ marginTop: 28 }} data-testid="link-storage-contact">Ask about storage <ArrowRight size={15} /></a>
            </div>
            <div className="field-image reveal">
              <img src={storageImage} alt="Wrapped cartons and moving blankets in secure short-term storage" loading="lazy" data-testid="img-storage" />
              <div className="field-image-label"><span className="mono">Secure short-term storage</span><p>A considered place for the things between destinations.</p></div>
            </div>
          </div>
        </section>

        <section className="quote" id="contact" aria-labelledby="quote-title">
          <div className="container quote-grid">
            <div className="quote-copy reveal">
              <div className="eyebrow mono">Let’s get moving</div>
              <h2 id="quote-title">Tell us the story of your move.</h2>
              <p>Give us a few details and the DD Haul team will get back to you to talk through the right next step.</p>
              <div className="contact-details">
                <a href="tel:+2349080000196" data-testid="link-contact-phone-1">0908 000 0196</a>
                <a href="tel:+2349040002221" data-testid="link-contact-phone-2">0904 000 2221</a>
                <a href="mailto:info@ddhaul.com.ng" data-testid="link-contact-email">info@ddhaul.com.ng</a>
                <a className="whatsapp-text-link" href={whatsappHref()} target="_blank" rel="noreferrer" data-testid="link-contact-whatsapp">
                  <WhatsAppIcon size={16} /> Chat on WhatsApp · {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
            <div className="quote-form reveal">
              {submitted ? (
                <div className="success-state" data-testid="status-quote-success">
                  <div className="success-mark"><Check size={22} /></div>
                  <h3>WhatsApp is opening.</h3>
                  <p>Your enquiry is ready to send. Finish the message in WhatsApp and a DD Haul moving partner will take it from there.</p>
                  <button className="button button-ghost" style={{ color: 'var(--ink)', borderColor: 'var(--line)' }} onClick={() => setSubmitted(false)} data-testid="button-submit-another">Send another enquiry <ArrowRight size={15} /></button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3>Start with the essentials.</h3>
                  <div className="form-row">
                    <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="e.g. Ada Okafor" data-testid="input-name" /></div>
                    <div className="form-field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" required placeholder="0908 000 0196" data-testid="input-phone" /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-field"><label htmlFor="move-type">I need help with</label><select id="move-type" name="move-type" defaultValue="" required data-testid="select-move-type"><option value="" disabled>Select one</option><option>Home or office relocation</option><option>Business logistics / 3PL</option><option>Event vendor logistics</option><option>Haulage or distribution</option><option>Storage or truck rental</option></select></div>
                    <div className="form-field"><label htmlFor="location">Move location</label><input id="location" name="location" required placeholder="Lagos to..." data-testid="input-location" /></div>
                  </div>
                  <div className="form-field"><label htmlFor="details">A few more details</label><textarea id="details" name="details" placeholder="Timing, volume, access, anything we should know..." data-testid="input-details" /></div>
                  <button className="button form-submit whatsapp-submit" type="submit" data-testid="button-submit-quote">Send on WhatsApp <WhatsAppIcon size={16} /></button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Logo />
              <p>Moving homes, businesses, events, and goods with the care and consistency they deserve.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col"><h4 className="mono">Explore</h4><a href="#about" data-testid="link-footer-about">Why DD Haul</a><a href="#services" data-testid="link-footer-services">Services</a><a href="#approach" data-testid="link-footer-approach">Our approach</a><a href="#contact" data-testid="link-footer-contact">Get a quote</a></div>
              <div className="footer-col"><h4 className="mono">Connect</h4><a href="tel:+2349080000196" data-testid="link-footer-phone">0908 000 0196</a><a className="footer-icon-link" href={whatsappHref()} target="_blank" rel="noreferrer" data-testid="link-footer-whatsapp"><WhatsAppIcon size={13} /> WhatsApp</a><a href="mailto:info@ddhaul.com.ng" data-testid="link-footer-email">info@ddhaul.com.ng</a><a className="footer-icon-link" href="https://www.instagram.com/ddhaul" target="_blank" rel="noreferrer" data-testid="link-footer-instagram"><Instagram size={13} /> Instagram</a><a className="footer-icon-link" href="https://www.linkedin.com/company/dd-haul/" target="_blank" rel="noreferrer" data-testid="link-footer-linkedin"><Linkedin size={13} /> LinkedIn</a></div>
            </div>
          </div>
          <div className="footer-bottom"><span className="mono">© 2025 DD Haul · Lagos, Nigeria</span><span className="mono">Moving made easy.</span></div>
        </div>
      </footer>
    </div>
    <a
      className="whatsapp-fab"
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with DD Haul on WhatsApp"
      data-testid="link-whatsapp-fab"
    >
      <WhatsAppIcon size={28} />
    </a>
    </>
  );
}

export default App;