import { useState } from 'react';
import './CoreServices.css';
import Animate from './Animate';

// ── Asset imports ──────────────────────────────────────────────
import figma       from '../assets/67d5951aa64dbfigma.svg';
import photoshop   from '../assets/67d5977ac828fphotoshop.svg';
import canva       from '../assets/67d597afa917dcanva.svg';
import html        from '../assets/67d599ceb1cc8html.svg';
import css         from '../assets/67d599f7a5c1bcss.svg';
import bootstrap   from '../assets/67d59a0ab4797bootstrap.svg';
import bulma       from '../assets/67d59b76f3062bulma.svg';
import sass        from '../assets/67d59b97cb7e7sass.svg';
import javascript  from '../assets/67d59c0e1a0c9javascript.svg';
import react       from '../assets/67d7ba1618573react.svg';
import typescript  from '../assets/67d7bac3cd482typescript.svg';
import nextjs      from '../assets/67d7bb1035af3next-js.svg';
import tailwind    from '../assets/67d7bb485655etailwind-css.svg';
import php         from '../assets/67d7bc6663a0cphp.svg';
import nodejs      from '../assets/67d7bcffc7e08node-js.svg';
import express     from '../assets/67d7bd11679baexpress.svg';
import python      from '../assets/67d7bd48131c0python.svg';
import django      from '../assets/67d7bd74e996edjango.svg';
import docker      from '../assets/67d7be4fef900docker.svg';
import postman     from '../assets/67d7be687b04cpostman.svg';
import dotnet      from '../assets/67d7be87522a7dotnet.svg';
import mysql       from '../assets/67d7bea58d993mysql.svg';
import postgresql  from '../assets/67d7beb6bf64apostgresql.svg';
import mariadb     from '../assets/67d7bec4a7ac7mariadb.svg';
import mongodb     from '../assets/67d7bee256588mongodb.svg';
import git         from '../assets/67d7bf2778321git.svg';
import github      from '../assets/67d7bf333f891github.svg';
import aws         from '../assets/67d7bf5fbdb41aws.svg';
import gcp         from '../assets/67d7bf76da511gcp.svg';
import dreamweaver from '../assets/67d9811c18bb7adobe-dreamweaver.svg';

// ── Data ───────────────────────────────────────────────────────
const tabs = [
  {
    id: 'web',
    label: 'Website Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    categories: [
      {
        label: 'UI & UX',
        tools: [
          { name: 'Figma',            icon: figma },
          { name: 'Photoshop',        icon: photoshop },
          { name: 'Canva',            icon: canva },
          { name: 'Adobe Dreamweaver',icon: dreamweaver },
        ],
      },
      {
        label: 'Frontend',
        tools: [
          { name: 'HTML',       icon: html },
          { name: 'CSS',        icon: css },
          { name: 'JavaScript', icon: javascript },
          { name: 'TypeScript', icon: typescript },
          { name: 'React',      icon: react },
          { name: 'Next.js',    icon: nextjs },
          { name: 'Tailwind',   icon: tailwind },
          { name: 'Bootstrap',  icon: bootstrap },
          { name: 'Sass',       icon: sass },
          { name: 'Bulma',      icon: bulma },
        ],
      },
      {
        label: 'Backend',
        tools: [
          { name: 'Node.js', icon: nodejs },
          { name: 'Express', icon: express },
          { name: 'PHP',     icon: php },
          { name: 'Python',  icon: python },
          { name: 'Django',  icon: django },
          { name: '.NET',    icon: dotnet },
        ],
      },
      {
        label: 'Database',
        tools: [
          { name: 'MySQL',      icon: mysql },
          { name: 'PostgreSQL', icon: postgresql },
          { name: 'MariaDB',    icon: mariadb },
          { name: 'MongoDB',    icon: mongodb },
        ],
      },
      {
        label: 'Deployment On Server',
        tools: [
          { name: 'Git',    icon: git },
          { name: 'GitHub', icon: github },
          { name: 'Docker', icon: docker },
          { name: 'AWS',    icon: aws },
          { name: 'GCP',    icon: gcp },
          { name: 'Postman',icon: postman },
        ],
      },
    ],
  },
  {
    id: 'app',
    label: 'App Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    categories: [
      {
        label: 'UI & UX',
        tools: [
          { name: 'Figma',     icon: figma },
          { name: 'Photoshop', icon: photoshop },
          { name: 'Canva',     icon: canva },
        ],
      },
      {
        label: 'Frontend',
        tools: [
          { name: 'React',      icon: react },
          { name: 'TypeScript', icon: typescript },
          { name: 'JavaScript', icon: javascript },
          { name: 'Tailwind',   icon: tailwind },
        ],
      },
      {
        label: 'Backend',
        tools: [
          { name: 'Node.js', icon: nodejs },
          { name: 'Express', icon: express },
          { name: 'Python',  icon: python },
          { name: 'Django',  icon: django },
        ],
      },
      {
        label: 'Database',
        tools: [
          { name: 'MongoDB',    icon: mongodb },
          { name: 'PostgreSQL', icon: postgresql },
          { name: 'MySQL',      icon: mysql },
        ],
      },
      {
        label: 'Deployment On Server',
        tools: [
          { name: 'Docker', icon: docker },
          { name: 'AWS',    icon: aws },
          { name: 'GCP',    icon: gcp },
          { name: 'GitHub', icon: github },
        ],
      },
    ],
  },
  {
    id: 'software',
    label: 'Software Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <polyline points="8 21 12 17 16 21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    categories: [
      {
        label: 'UI & UX',
        tools: [
          { name: 'Figma',     icon: figma },
          { name: 'Photoshop', icon: photoshop },
        ],
      },
      {
        label: 'Frontend',
        tools: [
          { name: 'React',      icon: react },
          { name: 'Next.js',    icon: nextjs },
          { name: 'TypeScript', icon: typescript },
          { name: 'Tailwind',   icon: tailwind },
        ],
      },
      {
        label: 'Backend',
        tools: [
          { name: 'Node.js', icon: nodejs },
          { name: 'Express', icon: express },
          { name: 'Python',  icon: python },
          { name: 'Django',  icon: django },
          { name: '.NET',    icon: dotnet },
          { name: 'PHP',     icon: php },
        ],
      },
      {
        label: 'Database',
        tools: [
          { name: 'MySQL',      icon: mysql },
          { name: 'PostgreSQL', icon: postgresql },
          { name: 'MongoDB',    icon: mongodb },
          { name: 'MariaDB',    icon: mariadb },
        ],
      },
      {
        label: 'Deployment On Server',
        tools: [
          { name: 'Docker',  icon: docker },
          { name: 'AWS',     icon: aws },
          { name: 'GCP',     icon: gcp },
          { name: 'Git',     icon: git },
          { name: 'GitHub',  icon: github },
          { name: 'Postman', icon: postman },
        ],
      },
    ],
  },
  {
    id: 'marketing',
    label: 'Digital Marketing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    categories: [
      {
        label: 'Design Tools',
        tools: [
          { name: 'Figma',     icon: figma },
          { name: 'Photoshop', icon: photoshop },
          { name: 'Canva',     icon: canva },
        ],
      },
      {
        label: 'Web Presence',
        tools: [
          { name: 'HTML',      icon: html },
          { name: 'CSS',       icon: css },
          { name: 'Bootstrap', icon: bootstrap },
          { name: 'Tailwind',  icon: tailwind },
        ],
      },
      {
        label: 'Analytics & Dev',
        tools: [
          { name: 'JavaScript', icon: javascript },
          { name: 'React',      icon: react },
          { name: 'Python',     icon: python },
        ],
      },
      {
        label: 'Database',
        tools: [
          { name: 'MySQL',   icon: mysql },
          { name: 'MongoDB', icon: mongodb },
        ],
      },
      {
        label: 'Deployment & Tools',
        tools: [
          { name: 'AWS',    icon: aws },
          { name: 'GCP',    icon: gcp },
          { name: 'Docker', icon: docker },
          { name: 'GitHub', icon: github },
        ],
      },
    ],
  },
];

// ── Component ──────────────────────────────────────────────────
export default function CoreServices() {
  const [activeTab, setActiveTab]         = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  const currentTab      = tabs[activeTab];
  const currentCategory = currentTab.categories[activeCategory];

  function handleTabChange(idx) {
    setActiveTab(idx);
    setActiveCategory(0);
  }

  return (
    <section id="core-services" className="core-services">
      {/* gradient background blobs */}
      <div className="cs-blob cs-blob-left"  aria-hidden="true" />
      <div className="cs-blob cs-blob-right" aria-hidden="true" />

      <div className="container">
        {/* ── Header ── */}
        <Animate variant="fade-up" className="section-header cs-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Core Service Offerings</h2>
        </Animate>

        {/* ── Tab bar ── */}
        <Animate variant="fade-up" delay="80ms" className="cs-tabs">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              className={`cs-tab ${activeTab === idx ? 'cs-tab--active' : ''}`}
              onClick={() => handleTabChange(idx)}
              aria-pressed={activeTab === idx}
            >
              <span className="cs-tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </Animate>

        {/* ── Body ── */}
        <Animate variant="fade-up" delay="160ms" className="cs-body">
          {/* Left: category list */}
          <div className="cs-categories">
            {currentTab.categories.map((cat, idx) => (
              <button
                key={cat.label}
                className={`cs-cat-item ${activeCategory === idx ? 'cs-cat-item--active' : ''}`}
                onClick={() => setActiveCategory(idx)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right: tech icons */}
          <div className="cs-tools" key={`${activeTab}-${activeCategory}`}>
            {currentCategory.tools.map((tool) => (
              <div className="cs-tool" key={tool.name} title={tool.name}>
                <img src={tool.icon} alt={tool.name} loading="lazy" />
                <span className="cs-tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
}
