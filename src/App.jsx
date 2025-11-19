import { useEffect, useRef, useState } from 'react'
import './App.css'
import logoImage from './assets/logo.jpg'
import heroImage from './assets/image.png'
import concreteDrivewayImage from './assets/Concrete driveway.png'
import houseExteriorImage from './assets/House Exterior Cleaning.png'
import deckRestorationImage from './assets/Deck Restoration.png'
import commercialPropertyImage from './assets/Commercial Property.png'
import carDetailingImage from './assets/Car Detailing Perfection.png'
import fleetTruckImage from './assets/Fleet Truck Revival.png'
import detailStudioImage from './assets/Detail Studio Interior.png'
import trustedExpertsImage from './assets/Your Trusted Pressure Washing Experts.png'
import semiTruckWash1 from './assets/semi truck wash.jpg'
import semiTruckWash2 from './assets/semi truck wash 2.jpg'
import semiTruckWash3 from './assets/semi truck wash 3.jpg'
import drivewayImage from './assets/driveway.jpg'

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
    title: 'Truck & Trailer Wash',
  },
  {
    title: 'Car Wash',
  },
  {
    title: 'Driveway Wash',
  },
  {
    title: 'Concrete Surface Cleaning',
  },
  {
    title: 'Building Exterior Wash',
  },
  {
    title: 'Heavy Equipment Wash',
  },
  {
    title: 'Farm Equipment Wash',
  },
]

const whyChooseUs = [
  { text: 'Mobile convenience – we come to your location' },
  { text: 'Professional-grade equipment & eco-safe cleaning' },
  { text: 'Fast turnaround & friendly service' },
  { text: 'Serving residential, commercial, and agricultural clients' },
]

const projectImages = [
  { 
    src: semiTruckWash1, 
    title: 'Heavy Duty Fleet Washing',
    description: 'Our heavy-duty fleet washing service ensures your commercial vehicles remain in pristine condition. We use specialized industrial-grade cleaning agents to remove road grime, grease, and oil without damaging the paint or decals.',
    features: ['Degreasing & bug removal', 'Aluminum brightening', 'Undercarriage wash']
  },
  { 
    src: drivewayImage, 
    title: 'Commercial Cleaning Job',
    description: 'First impressions matter for your business. Our commercial surface cleaning restores the look of your walkways, parking lots, and entryways. We remove gum, oil stains, and organic buildup to create a welcoming environment for your customers.',
    features: ['Oil stain removal', 'Gum removal', 'High-traffic area cleaning']
  },
  { 
    src: semiTruckWash2, 
    title: 'Commercial Truck Care',
    description: 'Regular maintenance washing for commercial trucks extends the life of your fleet. We provide reliable, scheduled cleaning services that keep your trucks looking professional and compliant with DOT inspections.',
    features: ['Scheduled maintenance', 'Mirror & glass polishing', 'Cab exterior detailing']
  },
  { 
    src: semiTruckWash3, 
    title: 'Trailer & Equipment Wash',
    description: 'From reefers to flatbeds and heavy machinery, we have the capability to clean it all. Our mobile units are equipped with hot water systems to tackle the toughest mud and clay on construction equipment and trailers.',
    features: ['Heavy equipment degreasing', 'Trailer washout', 'Sanitization services']
  },
]

const galleryItems = [
  {
    before: concreteDrivewayImage,
    after: concreteDrivewayImage,
    title: 'Driveway Restoration',
    subtitle: 'Complete transformation in just 2 hours',
  },
  {
    before: houseExteriorImage,
    after: houseExteriorImage,
    title: 'House Exterior Cleaning',
    subtitle: 'Soft wash technique for safe cleaning',
  },
  {
    before: deckRestorationImage,
    after: deckRestorationImage,
    title: 'Deck Restoration',
    subtitle: 'Wood brought back to life',
  },
  {
    before: commercialPropertyImage,
    after: commercialPropertyImage,
    title: 'Commercial Property',
    subtitle: 'Professional results every time',
  },
  {
    before: detailStudioImage,
    after: detailStudioImage,
    title: 'Car Detailing Perfection',
    subtitle: 'Paint depth restored with mirror finish',
  },
  {
    before: fleetTruckImage,
    after: fleetTruckImage,
    title: 'Fleet Truck Revival',
    subtitle: 'Road grime removed, fleet-ready shine',
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
  const [cardWidth, setCardWidth] = useState(0)
  const [lightboxImage, setLightboxImage] = useState(null)
  const testimonialTrackRef = useRef(null)
  const testimonialSliderRef = useRef(null)
  const navRef = useRef(null)
  const navMenuRef = useRef(null)
  const hamburgerRef = useRef(null)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    // Always show one testimonial at a time
    setVisibleTestimonials(1)
    
    // Calculate card width for transform
    const updateCardWidth = () => {
      if (testimonialSliderRef.current) {
        const sliderWidth = testimonialSliderRef.current.offsetWidth
        // Slider has padding: 0 20px, so card width is sliderWidth - 40px
        const cardWidthValue = sliderWidth - 40
        setCardWidth(cardWidthValue)
      }
    }
    
    updateCardWidth()
    window.addEventListener('resize', updateCardWidth)
    return () => window.removeEventListener('resize', updateCardWidth)
  }, [])

  useEffect(() => {
    let lastScrollTop = 0
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (navRef.current) {
        if (scrollTop > 100) navRef.current.classList.add('scrolled')
        else navRef.current.classList.remove('scrolled')
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
      <nav className="navbar" id="navbar" ref={navRef}>
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="nav-brand" onClick={(e) => handleNavClick(e, '#home')}>
              GC <span>Pressure Wash</span>
            </a>
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
        <div className="hero-image-container">
          <img src={heroImage} alt="Mobile Pressure Washing" className="hero-main-image" />
        </div>
        <div className="brand-hero-wrapper">
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
          
          <div className="services-content-wrapper">
            <div className="services-image-column" data-aos="fade-right">
              <div className="services-logo-container">
                <img src={logoImage} alt="GC Pressure Wash Services Logo" className="services-logo-large" />
              </div>
            </div>
            
            <div className="services-list-column" data-aos="fade-left">
              <div className="services-grid-simple">
                {serviceCategories.map((service, index) => (
                  <div className="service-item-simple" key={service.title}>
                    <div className="service-bullet">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="service-name-wrapper">
                      <h3 className="service-name">{service.title}</h3>
                      {service.subtitle && <span className="service-subtitle">{service.subtitle}</span>}
                    </div>
                    {service.badge && <span className="service-badge-simple">{service.badge}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge">Why Choose Us?</span>
            <h2 className="section-title">What Makes Us Different</h2>
            <p className="section-description">Experience the GC Mobile Pressure Wash difference</p>
          </div>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div className="why-choose-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="why-choose-icon">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <p className="why-choose-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="video-showcase">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge">In Action</span>
            <h2 className="section-title">Watch Us Work</h2>
            <p className="section-description">Precision detailing and deep cleaning in action</p>
          </div>
          <div className="video-rows">
            {/* First Video Row: Video Left, Text Right */}
            <div className="video-row" data-aos="fade-up">
              <div className="video-wrapper video-faded-border">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/XmLCH2vrb94?autoplay=1&mute=1&loop=1&playlist=XmLCH2vrb94&controls=1" 
                  title="Interior Deep Clean" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-text-content">
                <h3>Interior Deep Clean</h3>
                <p>
                  Experience the difference of our deep cleaning process. We go beyond surface-level cleaning to remove deep-seated dirt, allergens, and odors, restoring comfort and hygiene to your vehicle's interior.
                </p>
                <ul className="video-features">
                  <li><i className="fa-solid fa-check"></i> Deep stain removal</li>
                  <li><i className="fa-solid fa-check"></i> Odor elimination</li>
                  <li><i className="fa-solid fa-check"></i> Fabric protection</li>
                </ul>
              </div>
            </div>

            {/* Second Video Row: Text Left, Video Right */}
            <div className="video-row reverse" data-aos="fade-up">
              <div className="video-text-content">
                <h3>Precision Detailing</h3>
                <p>
                  Our attention to detail is unmatched. Every corner, crevice, and vent is meticulously cleaned and conditioned. We treat your vehicle with the care it deserves, ensuring a showroom-quality finish.
                </p>
                <ul className="video-features">
                  <li><i className="fa-solid fa-check"></i> Vent & dash cleaning</li>
                  <li><i className="fa-solid fa-check"></i> Leather conditioning</li>
                  <li><i className="fa-solid fa-check"></i> Premium finish products</li>
                </ul>
              </div>
              <div className="video-wrapper video-faded-border">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/_db5PFALSC4?autoplay=1&mute=1&loop=1&playlist=_db5PFALSC4&controls=1" 
                  title="Precision Detailing" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-projects">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge">Portfolio</span>
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-description">A look at our latest heavy duty and residential work</p>
          </div>
          <div className="projects-list">
            {projectImages.map((project, index) => (
              <div className={`project-row ${index % 2 !== 0 ? 'reverse' : ''}`} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="project-image-wrapper video-faded-border" onClick={() => setLightboxImage(project.src)}>
                  <img src={project.src} alt={project.title} />
                  <div className="project-zoom-icon">
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.features && (
                    <ul className="project-features">
                      {project.features.map((feature, i) => (
                        <li key={i}><i className="fa-solid fa-check"></i> {feature}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={lightboxImage} alt="Full screen view" />
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}

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
              <img src={trustedExpertsImage} alt="Professional team" />
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
          <div className="testimonials-slider" ref={testimonialSliderRef}>
            <div
              className="testimonial-track"
              ref={testimonialTrackRef}
              style={{ transform: cardWidth > 0 ? `translateX(-${testimonialIndex * cardWidth}px)` : 'translateX(0)' }}
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

      <section className="cta-section" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('${semiTruckWash1}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
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
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="tel:+1234567890">(123) 456-7890</a>
                </li>
                <li>
                  <a href="mailto:info@gcpressurewash.com">info@gcpressurewash.com</a>
                </li>
                <li>123 Main Street, Your City, ST 12345</li>
              </ul>
              <div className="footer-social" style={{ marginTop: '1.5rem' }}>
                {socialLinks.slice(0, 4).map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.label}>
                    <i className={social.icon}></i>
                  </a>
                ))}
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
