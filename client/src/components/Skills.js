import React from "react";
import BuildSkills from "../helper/BuildSkills";
import { Col, Container, Row } from "react-bootstrap";
import { selfSkills } from "../context/Config";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "skill-bx animate__animated animate__fadeInUpBig "
                      : "skill-bx"
                  }
                >
                  <h2>Skills</h2>
                  <p>
                    As a passionate and dedicated software engineer, I have
                    developed a diverse skill set that allows me to tackle a
                    wide range of challenges across the software development
                    lifecycle. My expertise spans both front-end and back-end
                    development, and I strive to integrate the best practices
                    and modern technologies to build user-friendly and robust
                    applications.
                  </p>
                  <BuildSkills skills={selfSkills} />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
