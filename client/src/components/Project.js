import React from "react";
import {
  Col,
  Container,
  Row,
  TabContainer,
  TabPane,
  Nav,
  TabContent,
} from "react-bootstrap";
import { works, algos } from "../context/Config";
import { BuildProject } from "../helper/BuildProject";
import TrackVisibility from "react-on-screen";

export const Project = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeInUpBig " : ""
                    }
                  >
                    <h2>Projects</h2>
                    <p>
                      I developed my skills as a software developer by mastering
                      new technologies, solving real-world problems, and
                      improving my teamwork and project management abilities.
                      This hands-on experience allowed me to grow both
                      personally and professionally.
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <TabContainer id="projects-tabs" defaultActiveKey="first">
                <TrackVisibility>
                  {({ isVisible }) => (
                    <Nav
                      className={
                        isVisible
                          ? "animate__animated animate__fadeInUpBig "
                          : ""
                      }
                      variant="pills"
                      defaultActiveKey="/home"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Build Softwares</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Explored algorithms
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  )}
                </TrackVisibility>
                <TabContent className="mt-5">
                  <TabPane eventKey="first">
                    <Row>
                      <BuildProject projects={works} />
                    </Row>
                  </TabPane>
                  <TabPane eventKey="second">
                    <Row>
                      <BuildProject projects={algos} />
                    </Row>
                  </TabPane>
                </TabContent>
              </TabContainer>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
