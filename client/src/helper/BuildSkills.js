import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../context/Config";
import { Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

export default function BuildSkills({ skills }) {
  return (
    <Carousel className="skill-slider" infinite={true} responsive={responsive}>
      {skills.map((skill, key) => (
        <>
          <TrackVisibility>
            {
             ({ isVisible }) => <div
                className={isVisible ? "item animate__animated animate__zoomInDown animate__delay-1s " : "item"}
                key={key}
              >
                <Row className="justify-content-center text-center">
                  <Col>
                    <div className="d-flex flex-column align-items-center">
                      <div className="mb-2 fs-1 text-danger">{skill.icon}</div>
                      <div className="">
                        <h5>{skill.label}</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            }
          </TrackVisibility>
        </>
      ))}
    </Carousel>
  );
}
