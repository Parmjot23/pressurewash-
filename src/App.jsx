import { useEffect, useRef, useState } from 'react'
import './App.css'
import logoImage from './assets/logo.jpg'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const featureHighlights = [
  { icon: 'fa-solid fa-shield-halved', title: 'Licensed & Insured', text: 'Fully certified professionals' },
  { icon: 'fa-solid fa-leaf', title: 'Eco-Friendly', text: 'Safe for your family & pets' },
  { icon: 'fa-solid fa-clock', title: 'Same Day Service', text: 'Quick response times' },
  { icon: 'fa-solid fa-money-bill-wave', title: 'Best Prices', text: 'Competitive & transparent' },
]

const serviceSpotlight = {
  eyebrow: 'Signature Foam & Shine Program',
  title: 'Full-Spectrum Cleaning Packages',
  description:
    'Choose a curated bundle for residential exteriors, high-volume truck washes, or boutique detailing. Every plan includes pro-grade detergents, spotless rinse systems, and inspection-ready finish work.',
  stats: [
    { label: 'Average Turnaround', value: '120 mins' },
    { label: 'Fleet Up-Time Gain', value: '+18%' },
    { label: 'Water Saved / Wash', value: '60 gal' },
  ],
  bullets: ['Touchless & hand-finish hybrid options', 'Up to 53ft rigs + trailers supported', 'Mobile detailing lounge for clients'],
}

const serviceCategories = [
  {
    title: 'Car Wash Studio',
    subtitle: 'Luxury Auto Detailing',
    description: 'Two-bucket foam bath, paint-safe rinse, wheel & tire revitalization, and interior refresh add-ons.',
    tags: ['Ceramic Lite', 'Pet Hair Reset', 'Rain Repellent'],
    badge: 'Detail Lab',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900',
  },
  {
    title: 'Commercial Truck Wash',
    subtitle: 'Fleet Rinse Systems',
    description: 'Oversized bays + mobile gantry units for semis, reefers, buses, and municipal fleets.',
    tags: ['Undercarriage Flush', 'DOT Inspection Prep', 'Anti-ice Coat'],
    badge: 'Fleet Ready',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900',
  },
  {
    title: 'Fleet Detailing & Protection',
    subtitle: 'On-Site Finishing',
    description: 'Vinyl wrap safe polishing, interior sanitation, and quarterly protective coatings.',
    tags: ['Vinyl Safe', 'Odor Neutral', 'Multi-unit Scheduling'],
    image: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=900',
  },
  {
    title: 'Residential Soft Wash',
    subtitle: 'Siding & Outdoor Living',
    description: 'Gentle low-pressure wash for siding, patios, pool decks, screened enclosures, and pergolas.',
    tags: ['Plants Shielded', 'Pet Friendly', 'Same-Day Dry'],
    image: 'https://images.unsplash.com/photo-1505692794400-5e0f0a4eb340?w=900',
  },
  {
    title: 'Concrete & Surface Renewal',
    subtitle: 'Driveways & Docks',
    description: 'Hot water surface cleaning for driveways, walkways, loading docks, and retail plazas.',
    tags: ['Oil Lift', 'Gum Vapor', 'Line-Stripe Safe'],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900',
  },
  {
    title: 'Roof & Gutter Revival',
    subtitle: 'Shingle & Metal Safe',
    description: 'Soft wash roof treatments, gutter whitening, moss removal, and brightening for fascia/soffits.',
    tags: ['Soft Wash', 'Warranty Safe', 'Drone Inspection'],
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900',
  },
]

const galleryItems = [
  {
    before: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
    after: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    title: 'Driveway Restoration',
    subtitle: 'Complete transformation in just 2 hours',
  },
  {
    before: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    after: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    title: 'House Exterior Cleaning',
    subtitle: 'Soft wash technique for safe cleaning',
  },
  {
    before: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800',
    after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    title: 'Deck Restoration',
    subtitle: 'Wood brought back to life',
  },
  {
    before: 'https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=800',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    title: 'Commercial Property',
    subtitle: 'Professional results every time',
  },
  {
    before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    after: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=800',
    title: 'Car Detailing Perfection',
    subtitle: 'Paint depth restored with mirror finish',
  },
  {
    before: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=800',
    after: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800',
    title: 'Fleet Truck Revival',
    subtitle: 'Road grime removed, fleet-ready shine',
  },
  {
    before: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
    after: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800',
    title: 'Detail Studio Interior',
    subtitle: 'Interior detailing, spotless + sanitized',
  },
  {
    before: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800',
    after: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=800',
    title: 'Luxury Coupe Detail',
    subtitle: 'Ceramic protection + wheel polish',
  },
]

const aboutPoints = [
  { title: 'Professional Equipment', text: 'Latest technology for superior results' },
  { title: 'Trained Technicians', text: 'Certified and experienced professionals' },
  { title: '100% Guarantee', text: 'We stand behind our work' },
]

const processSteps = [
  { icon: 'fa-solid fa-phone', title: 'Request Quote', text: 'Contact us via phone, email, or our online form for a free, no-obligation quote.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Schedule Service', text: 'Choose a convenient time that works for you. We offer flexible scheduling options.' },
  { icon: 'fa-solid fa-spray-can', title: 'We Clean', text: 'Our professional team arrives on time and completes the job efficiently and thoroughly.' },
  { icon: 'fa-solid fa-face-smile', title: 'Enjoy Results', text: 'Sit back and admire your beautifully cleaned property. Satisfaction guaranteed!' },
]

const testimonials = [
  {
    name: 'John Smith',
    role: 'Homeowner',
    text: 'Absolutely amazing service! They transformed our grimy driveway into something that looks brand new.',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    text: "We use GC Pressure Wash for all our commercial properties. They're reliable, efficient, and always deliver outstanding results.",
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Michael Davis',
    role: 'Homeowner',
    text: 'My deck looks incredible! Years of dirt and grime removed in just a few hours.',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Homeowner',
    text: 'Best investment for our home’s curb appeal. The house washing service made our home look freshly painted.',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    name: 'David Kim',
    role: 'Fleet Manager',
    text: 'Their truck wash program keeps our logistics fleet inspection-ready. Fast turnaround and spotless results every time.',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    name: 'Laura Chen',
    role: 'Detailing Client',
    text: 'Interior + exterior detailing that made my SUV look factory new. Loved the convenience of their mobile lounge.',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Marco Alvarez',
    role: 'Restaurant Owner',
    text: 'Our loading dock and patio areas look brand new after every visit. Clients comment on the cleanliness constantly.',
    avatar: 'https://i.pravatar.cc/150?img=45',
  },
  {
    name: 'Priya Patel',
    role: 'Property Manager',
    text: 'They handle multiple communities for us—roof cleaning, sidewalks, pool decks. Dependable scheduling and clear reporting.',
    avatar: 'https://i.pravatar.cc/150?img=55',
  },
]

const contactDetails = [
  { icon: 'fa-solid fa-phone', title: 'Phone', lines: ['(123) 456-7890'], link: 'tel:+1234567890' },
  { icon: 'fa-solid fa-envelope', title: 'Email', lines: ['info@gcpressurewash.com'], link: 'mailto:info@gcpressurewash.com' },
  { icon: 'fa-solid fa-location-dot', title: 'Address', lines: ['123 Main Street, Your City, ST 12345'] },
  { icon: 'fa-solid fa-clock', title: 'Business Hours', lines: ['Mon-Sat: 7AM - 7PM', 'Sunday: 9AM - 5PM'] },
]

const socialLinks = [
  { icon: 'fa-brands fa-facebook-f', label: 'Facebook', href: '#' },
  { icon: 'fa-brands fa-instagram', label: 'Instagram', href: '#' },
  { icon: 'fa-brands fa-x-twitter', label: 'Twitter', href: '#' },
  { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', href: '#' },
  { icon: 'fa-brands fa-youtube', label: 'YouTube', href: '#' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState(1)
  const testimonialTrackRef = useRef(null)
  const topBarRef = useRef(null)
  const navRef = useRef(null)
  const navMenuRef = useRef(null)
  const hamburgerRef = useRef(null)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    const determineVisible = () => {
      if (window.innerWidth >= 1200) return 3
      if (window.innerWidth >= 820) return 2
      return 1
    }
    const updateVisible = () => {
      const value = determineVisible()
      setVisibleTestimonials(value)
      setTestimonialIndex((prev) => Math.min(prev, Math.max(testimonials.length - value, 0)))
    }
    updateVisible()
    window.addEventListener('resize', updateVisible)
    return () => window.removeEventListener('resize', updateVisible)
  }, [])

  useEffect(() => {
    let lastScrollTop = 0
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (navRef.current) {
        if (scrollTop > 100) navRef.current.classList.add('scrolled')
        else navRef.current.classList.remove('scrolled')
      }

      if (topBarRef.current && navRef.current) {
        if (scrollTop > 120) {
          if (scrollTop > lastScrollTop) {
            topBarRef.current.classList.add('hidden')
            navRef.current.classList.add('top-bar-hidden')
          } else {
            topBarRef.current.classList.remove('hidden')
            navRef.current.classList.remove('top-bar-hidden')
          }
        } else {
          topBarRef.current.classList.remove('hidden')
          navRef.current.classList.remove('top-bar-hidden')
        }
      }

      setShowBackToTop(scrollTop > 500)

      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 140
        const sectionId = section.getAttribute('id')
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId)
        }
      })

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [menuOpen])

  const handleNavClick = (event, selector) => {
    event.preventDefault()
    const target = document.querySelector(selector)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  const handleQuoteClick = () => {
    const contact = document.querySelector('#contact')
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleTestimonialNext = () => {
    setTestimonialIndex((prev) => Math.min(prev + 1, Math.max(testimonials.length - visibleTestimonials, 0)))
  }

  const handleTestimonialPrev = () => {
    setTestimonialIndex((prev) => Math.max(prev - 1, 0))
  }

  const touchStartRef = useRef(0)
  const handleTouchStart = (event) => {
    touchStartRef.current = event.touches[0].clientX
  }
  const handleTouchMove = (event) => {
    if (!touchStartRef.current) return
    const currentX = event.touches[0].clientX
    const diff = touchStartRef.current - currentX
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleTestimonialNext()
      else handleTestimonialPrev()
      touchStartRef.current = currentX
    }
  }
  const handleTouchEnd = () => {
    touchStartRef.current = 0
  }

  return (
    <>
      <div className="top-bar" ref={topBarRef}>
        <div className="container">
          <div className="top-bar-wrapper">
            <div className="top-bar-left">
              <div className="top-bar-item">
                <i className="fa-solid fa-clock"></i>
                <span>Mon-Sat: 7AM-7PM | Sun: 9AM-5PM</span>
              </div>
              <div className="top-bar-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>Serving Your Area</span>
              </div>
            </div>
            <div className="top-bar-right">
              <div className="top-bar-social">
                {socialLinks.slice(0, 4).map((social) => (
                  <a key={social.label} href={social.href} className="social-icon" aria-label={social.label}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar" id="navbar" ref={navRef}>
        <div className="container">
          <div className="nav-wrapper">
            <div className="nav-placeholder" aria-hidden="true"></div>
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="nav-menu" ref={navMenuRef}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                    onClick={(event) => handleNavClick(event, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="nav-cta">
              <button className="quote-btn nav-quote" type="button" onClick={handleQuoteClick}>
                <i className="fa-solid fa-bolt"></i>
                <span>Instant Quote</span>
              </button>
            </div>
            <button
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              id="hamburger"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                setMenuOpen((prev) => !prev)
              }}
              ref={hamburgerRef}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
        </button>
          </div>
        </div>
      </nav>

      <section className="brand-highlight" id="home">
        <div className="container">
          <div className="brand-card" data-aos="zoom-in">
            <div className="brand-logo-frame">
              <img src={logoImage} alt="GC Pressure Wash Services Logo" className="brand-logo" />
            </div>
            <div className="brand-caption">
              <p>
                Family-owned, detail obsessed, and trusted across residential, fleet, and commercial properties. We bring showroom-level clarity
                to every surface we touch.
              </p>
              <div className="brand-tags">
                <span>
                  <i className="fa-solid fa-city"></i> Urban &amp; Retail Sites
                </span>
                <span>
                  <i className="fa-solid fa-truck-fast"></i> Fleet &amp; Heavy Duty
                </span>
                <span>
                  <i className="fa-solid fa-house"></i> Luxury Residential
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-bar">
        <div className="container">
          <div className="features-grid">
            {featureHighlights.map((feature) => (
              <div className="feature-item" key={feature.title} data-aos="fade-up">
                <i className={feature.icon}></i>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge">Our Services</span>
            <h2 className="section-title">Complete Cleaning Solutions</h2>
            <p className="section-description">Professional pressure washing services tailored to your needs</p>
          </div>
          <div className="services-layout services-single">
            <div className="service-collection services-wide">
              {serviceCategories.map((service, index) => (
                <article className="service-row" key={service.title} data-aos="fade-up" data-aos-delay={index * 90}>
                  <div className="service-row-media">
                    <img src={service.image} alt={service.title} />
                    {service.badge && <span className="service-chip">{service.badge}</span>}
                  </div>
                  <div className="service-row-text">
                    <div className="service-row-header">
                      <div>
                        <h3>{service.title}</h3>
                        {service.subtitle && <p className="service-row-subtitle">{service.subtitle}</p>}
                      </div>
                    </div>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span className="tag-pill" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="service-link" type="button" onClick={handleQuoteClick}>
                    <span>Book {service.title}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge">Our Work</span>
            <h2 className="section-title">See The Transformation</h2>
            <p className="section-description">Real results from our satisfied customers</p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div className="gallery-item" key={item.title} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="before-after">
                  <img src={item.before} alt={`${item.title} before cleaning`} />
                  <div className="comparison-slider">
                    <img src={item.after} alt={`${item.title} after cleaning`} className="after-image" />
                    <div className="slider-line">
                      <div className="slider-button">
                        <i className="fa-solid fa-chevron-left"></i>
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="gallery-labels">
                    <span className="label-before">Before</span>
                    <span className="label-after">After</span>
                  </div>
                </div>
                <div className="gallery-info">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-image" data-aos="fade-right">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200" alt="Professional team" />
              <div className="about-badge">
                <div className="badge-content">
                  <h3>15+</h3>
                  <p>Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="about-content" data-aos="fade-left">
              <span className="section-badge">About Us</span>
              <h2 className="section-title">Your Trusted Pressure Washing Experts</h2>
              <p className="about-text">
                With over 15 years of experience, we&apos;ve perfected the art of pressure washing. Our team of certified professionals uses
                state-of-the-art equipment and eco-friendly solutions to deliver exceptional results every time.
              </p>
              <p className="about-text">
                We understand that your property is one of your most valuable investments. That&apos;s why we treat every job with the utmost care
                and attention to detail, ensuring your complete satisfaction.
              </p>
              <div className="about-points">
                {aboutPoints.map((point) => (
                  <div className="point" key={point.title}>
                    <i className="fa-solid fa-circle-check"></i>
                    <div>
                      <h4>{point.title}</h4>
                      <p>{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary btn-large" type="button" onClick={handleQuoteClick}>
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="container">
          <div className="video-wrapper" data-aos="zoom-in">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200" alt="Video thumbnail" />
            <button className="play-button" type="button" onClick={handleQuoteClick}>
              <i className="fa-solid fa-play"></i>
            </button>
            <div className="video-overlay">
              <h3>Watch How We Transform Properties</h3>
              <p>See our process in action</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge">How It Works</span>
            <h2 className="section-title">Simple &amp; Efficient Process</h2>
            <p className="section-description">Get your property cleaned in 4 easy steps</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div className="process-step" key={step.title} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="step-icon">
                  <i className={step.icon}></i>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">Don&apos;t just take our word for it</p>
          </div>
          <div className="testimonials-slider">
            <div
              className="testimonial-track"
              ref={testimonialTrackRef}
              style={{ transform: `translateX(-${testimonialIndex * 370}px)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={testimonial.name} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-controls">
              <button
                type="button"
                className="slider-btn prev-btn"
                onClick={handleTestimonialPrev}
                disabled={testimonialIndex === 0}
                aria-label="Previous testimonials"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button
                type="button"
                className="slider-btn next-btn"
                onClick={handleTestimonialNext}
                disabled={testimonialIndex >= testimonials.length - visibleTestimonials}
                aria-label="Next testimonials"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-wrapper" data-aos="zoom-in">
            <div className="cta-content">
              <h2>Ready to Transform Your Property?</h2>
              <p>Get a free quote today and see the difference professional pressure washing can make!</p>
              <div className="cta-buttons">
                <button className="btn btn-white btn-large" type="button" onClick={handleQuoteClick}>
                  <i className="fa-solid fa-calendar"></i>
                  <span>Schedule Now</span>
                </button>
                <a href="tel:+1234567890" className="btn btn-outline-white btn-large">
                  <i className="fa-solid fa-phone"></i>
                  <span>Call (123) 456-7890</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info" data-aos="fade-right">
              <span className="section-badge">Contact Us</span>
              <h2 className="section-title">Get In Touch</h2>
              <p>Have questions? We&apos;re here to help! Reach out to us through any of these channels.</p>
              <div className="contact-items">
                {contactDetails.map((detail) => (
                  <div className="contact-item" key={detail.title}>
                    <div className="contact-icon">
                      <i className={detail.icon}></i>
      </div>
                    <div>
                      <h4>{detail.title}</h4>
                      {detail.lines.map((line) =>
                        detail.link ? (
                          <p key={line}>
                            <a href={detail.link}>{line}</a>
                          </p>
                        ) : (
                          <p key={line}>{line}</p>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="social-links">
                {socialLinks.slice(0, 4).map((social) => (
                  <a key={social.label} href={social.href} className="social-link" aria-label={social.label}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
            <form className="contact-form" data-aos="fade-left">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="John Smith" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Type</label>
                <select id="service" name="service" required>
                  <option value="">Select a service</option>
                  {serviceCategories.map((service) => (
                    <option value={service.title} key={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-large btn-full">
                <span>Send Message</span>
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <div className="footer-logo">
                <img src={logoImage} alt="GC Pressure Wash Services Logo" className="logo-image" />
                <span>GC Pressure Wash <span className="highlight">Services</span></span>
              </div>
              <p>Your trusted partner for professional pressure washing services. We bring new life to your property with expert cleaning solutions.</p>
              <div className="footer-social">
                {socialLinks.slice(0, 4).map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.label}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={(event) => handleNavClick(event, link.href)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                {serviceCategories.slice(0, 5).map((service) => (
                  <li key={service.title}>
                    <a href="#services" onClick={(event) => handleNavClick(event, '#services')}>
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4>Newsletter</h4>
              <p>Subscribe to get special offers and updates.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
              <div className="footer-certifications">
                <img src="https://via.placeholder.com/80x40/4CAF50/ffffff?text=Licensed" alt="Licensed" />
                <img src="https://via.placeholder.com/80x40/2196F3/ffffff?text=Insured" alt="Insured" />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} GC Pressure Wash Services. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      <a href="https://wa.me/1234567890" className="whatsapp-fab" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  )
}

export default App
