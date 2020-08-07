import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const OtherProjects = () => {
  const { otherProjects } = useContext(PortfolioContext);

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
    <section id="other-projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Other Projects" />
          <div class="card-wrapper">
            {otherProjects.map((project) => {
              const { title, info, info2, repo, id } = project;
              return (
                <div key={id}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={100}
                    distance="30px"
                  >
                    <div className="card-wrapper__text">
                      <h3 className="card-wrapper__text-title">{title}</h3>
                      <div>
                        <p className="card-wrapper__text-info">
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                      </div>
                      <div>
                        <p className="card-wrapper__text-subinfo">{info2 || ''}</p>
                        {repo && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--resume"
                            href={repo}
                          >
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OtherProjects;
