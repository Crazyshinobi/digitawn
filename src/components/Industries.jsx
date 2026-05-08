import './Industries.css';
import Animate from './Animate';

import ecommerce    from '../assets/67d582de6593aE-Commerce.png';
import edutech      from '../assets/67d5830aad329Edu-Tech & E-learning.png';
import realEstate   from '../assets/67d58325a5d9eReal Estate.png';
import tourTravel   from '../assets/67d583406b4e9Tour & Travels.png';
import healthcare   from '../assets/67d5835a406d9healthcare.png';
import news         from '../assets/67d58371c7e4eNews.png';
import utilities    from '../assets/67d58383aeeceutilities.png';
import rideHailing  from '../assets/67d58399a5ac2Ride-hailing.png';
import logistics    from '../assets/67d583b19040dLogistics.png';
import insurance    from '../assets/67d583cd33788Insurance.png';
import astrology    from '../assets/67d5841744fa1astrology.png';
import fitness      from '../assets/67d58453a43c3fitness.png';
import hospitality  from '../assets/67d5846a5aefdhospitality.png';
import ott          from '../assets/67d5848ada940(OTT) streaming.png';

const industries = [
  {
    img: ecommerce,
    title: 'E-Commerce',
    desc: 'We provide IT solutions for e-commerce that help you build a flexible and scalable online store. Our services align with your brand\'s vision and strategies to boost your online presence.',
  },
  {
    img: edutech,
    title: 'Edu-Tech & E-learning',
    desc: 'We aim to improve education with IT solutions. We create custom e-learning applications and software tools that enhance how people learn and change how knowledge is shared around the world.',
  },
  {
    img: realEstate,
    title: 'Real Estate',
    desc: 'We change real estate with modern digital solutions. We improve property management, make transactions easier, and enhance customer experiences to help businesses grow and innovate smoothly.',
  },
  {
    img: tourTravel,
    title: 'Tour & Travels',
    desc: 'We change the Tour & Travel industry by providing smart digital solutions. We make booking easier, improve customer experiences, and enable smooth connections for travelers and agencies worldwide.',
  },
  {
    img: healthcare,
    title: 'Healthcare',
    desc: 'We want to change healthcare with an app that keeps patient information safe and puts patients first. The app follows current industry standards and focuses on making the patient care experience better.',
  },
  {
    img: news,
    title: 'News',
    desc: 'We offer the latest news on technology innovations, trends, and breakthroughs. We help industries and communities stay informed with timely insights and expert analysis for a connected digital future.',
  },
  {
    img: utilities,
    title: 'Utility',
    desc: 'We enhance the utility industry with innovative solutions, improving efficiency, innovation, and sustainability through advanced technology integration for smarter and more reliable operations worldwide.',
  },
  {
    img: rideHailing,
    title: 'Ride-hailing',
    desc: 'We are changing the ride-hailing industry with technology that makes booking rides easier, improves user experience, and ensures safe and reliable transportation around the world.',
  },
  {
    img: logistics,
    title: 'Logistics',
    desc: 'We improve logistics with advanced technology. Our solutions make your supply chains more efficient and help with transportation, tracking, and delivery. Start enhancing your logistics today.',
  },
  {
    img: insurance,
    title: 'Insurance',
    desc: 'We focus on strong security, reliable performance, and data integrity in our software solutions. Our mission is to provide insurance companies with the tools they need for smooth operations.',
  },
  {
    img: astrology,
    title: 'Astrology & Horoscope',
    desc: 'We provide personalized solutions for tarot readers, horoscope specialists, numerologists, and astrologers. Our easy-to-use platform helps you connect with clients and grow your spiritual journey.',
  },
  {
    img: fitness,
    title: 'Fitness',
    desc: 'We transform fitness journeys with personalized, innovative solutions. We provide easy access to expert trainers, tailored workouts, and health insights, helping you achieve your fitness goals anytime.',
  },
  {
    img: hospitality,
    title: 'Hospitality',
    desc: 'We professionalize the hospitality sector by delivering innovative solutions that streamline operational processes, enhance the guest experience, and facilitate effective communication between staff and customers.',
  },
  {
    img: ott,
    title: '(OTT) Streaming',
    desc: 'We significantly enhance the entertainment experience by providing seamless and high-quality over-the-top streaming services. Users can access their preferred content without limitations, at any time.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="industries">
      {/* bg blobs */}
      <div className="ind-blob ind-blob--tl" aria-hidden="true" />
      <div className="ind-blob ind-blob--br" aria-hidden="true" />

      <div className="container">
        {/* ── Header ── */}
        <Animate variant="fade-up" className="section-header ind-header">
          <span className="section-label">Our Working Industries</span>
          <h2 className="section-title">
            We're <span className="gradient-text">Everywhere</span>
          </h2>
          <p className="section-subtitle">
            From e-commerce to healthcare, we deliver tailored digital solutions across every major industry.
          </p>
        </Animate>

        {/* ── Grid ── */}
        <div className="ind-grid">
          {industries.map((item, i) => (
            <Animate
              key={item.title}
              variant="fade-up"
              delay={`${(i % 3) * 80}ms`}
              className="ind-card"
            >
              <div className="ind-card__img-wrap">
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
              <h3 className="ind-card__title">{item.title}</h3>
              <p className="ind-card__desc">{item.desc}</p>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
