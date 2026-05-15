import "./Services.css";
import Animate from "./Animate";
import { useState, useEffect } from "react";

const services = [
  {
    icon: "🎯",
    title: "Lead Generation",
    desc: "Data-driven campaigns that attract high-quality leads and convert prospects into loyal customers.",
    features: [
      "PPC & paid advertising",
      "SEO & organic growth",
      "Conversion funnel design",
      "CRM integration",
    ],
    tags: ["PPC", "SEO", "Funnels"],
    featured: true,
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    desc: "Full-funnel digital marketing strategies that boost visibility, drive targeted traffic, and maximize ROI.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads (Search & Display)",
      "SEO & keyword research",
      "Social Media Management",
      "SMO",
    ],
    tags: ["Meta Ads", "Google Ads", "SEO", "SMO"],
  },
  {
    icon: "💻",
    title: "Software Development",
    desc: "Custom software solutions built to solve real business problems — scalable, secure, and tailored.",
    features: [
      "Custom web applications",
      "API development & integration",
      "SaaS product development",
      "Cloud deployment",
    ],
    tags: ["Custom Apps", "APIs", "SaaS"],
  },
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Modern, fast, and responsive websites that make a lasting impression and drive measurable results.",
    features: [
      "React & Next.js websites",
      "E-commerce solutions",
      "CMS integration",
      "Performance optimization",
    ],
    tags: ["React", "Next.js", "CMS"],
  },
  {
    icon: "📱",
    title: "App Development",
    desc: "Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android.",
    features: [
      "iOS & Android apps",
      "React Native development",
      "UI/UX design",
      "App Store publishing",
    ],
    tags: ["iOS", "Android", "React Native"],
  },
  {
    icon: "📣",
    title: "Social Media Handling",
    desc: "Strategic content creation, community management, and growth campaigns that build your brand.",
    features: [
      "Content strategy & creation",
      "Community management",
      "Paid social campaigns",
      "Analytics & reporting",
    ],
    tags: ["Content", "Growth", "Analytics"],
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 580);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <Animate variant="fade-up" className="section-header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">
            Services That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="section-subtitle">
            End-to-end digital solutions designed to help startups and
            businesses scale fast and smart.
          </p>
        </Animate>

        {/* Desktop Grid View */}
        <div className="services-grid desktop-grid">
          {services.map((s, i) => (
            <Animate
              key={s.title}
              variant="fade-up"
              delay={`${i * 90}ms`}
              className={`service-card ${s.featured ? "featured" : ""}`}
            >
              <div className="card-glow" />
              <div className="service-icon-wrap">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="service-tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Animate>
          ))}
        </div>

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="mobile-carousel">
            <div className="carousel-container">
              <button
                className="carousel-btn prev"
                onClick={prevSlide}
                aria-label="Previous"
              >
                ‹
              </button>

              <div className="carousel-track">
                <div
                  className="carousel-slides"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {services.map((s, i) => (
                    <div
                      key={s.title}
                      className={`carousel-slide ${s.featured ? "featured" : ""}`}
                    >
                      <div className="card-glow" />
                      <div className="service-icon-wrap">{s.icon}</div>
                      <h3 className="service-title">{s.title}</h3>
                      <p className="service-desc">{s.desc}</p>
                      <ul className="service-features">
                        {s.features.slice(0, 4).map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                      <div className="service-tags">
                        {s.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="carousel-btn next"
                onClick={nextSlide}
                aria-label="Next"
              >
                ›
              </button>
            </div>

            <div className="carousel-dots">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
