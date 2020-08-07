import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Title title="Skills" />
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="15px">
            <Row>
              {skills.map((skill) => {
                return (
                  <Col key={skill.category} className="skill">
                    <i class={`fas fa-${skill.icon} skill-icon text-color-main`} />
                    <div className="skills-wrapper__text">
                      <div className="skills-wrapper__text-title">
                        <h1>{skill.category}</h1>
                      </div>
                      <ul>
                        {skill.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
