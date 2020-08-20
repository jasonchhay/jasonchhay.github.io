import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import OtherProjects from './OtherProjects/OtherProjects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import SEO from './seo';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  skillsData,
  experiencesData,
  projectsData,
  otherProjectsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setSkills([...skillsData]);
    setExperiences([...experiencesData]);
    setProjects([...projectsData]);
    setOtherProjects([...otherProjectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider
      value={{ hero, about, skills, experiences, projects, otherProjects, contact, footer }}
    >
      <SEO />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <OtherProjects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
