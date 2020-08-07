import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

function Experience(props) {
  const { experiences } = useContext(PortfolioContext);
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
    <section id="experience">
      <Container>
        <Title title="Experience" />
        <div className="experience-wrapper">
          <Tab.Container defaultActiveKey={0}>
            <Row>
              <Col sm={3}>
                <Fade top={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                  <Nav variant="pills" className="flex-column">
                    {experiences.map((experience, index) => {
                      const { company, id } = experience;
                      return (
                        <Nav.Item key={id}>
                          <Nav.Link
                            eventKey={index}
                            className="cta-btn cta-btn--resume cta-btn--nav"
                          >
                            {company}
                          </Nav.Link>
                        </Nav.Item>
                      );
                    })}
                  </Nav>
                </Fade>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {experiences.map((experience, index) => {
                    const { company, positions, id } = experience;
                    return (
                      <Tab.Pane eventKey={index} key={id}>
                        <Fade
                          left={isDesktop}
                          bottom={isMobile}
                          duration={1000}
                          delay={100}
                          distance="15px"
                        >
                          <div className="company">
                            <div className="company-wrapper">
                              <h1 className="company-wrapper__text-title">{company}</h1>
                            </div>

                            {positions.map((position) => {
                              const { title, location, start, end, description } = position;

                              return (
                                <div className="position" key={title}>
                                  <h2 className="position-wrapper__text-title">{title}</h2>
                                  <div className="position-wrapper">
                                    <h3 className="position__text-duration">
                                      {start} - {end}
                                    </h3>
                                    <h3 className="position-wrapper__text-location">{location}</h3>
                                  </div>
                                  <ul>
                                    {description.map((item) => (
                                      <li key={item} className="position__text">
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </Fade>
                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
