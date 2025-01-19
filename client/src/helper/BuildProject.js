import React from "react";
import { Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

export const BuildProject = ({ projects }) => {
  return (
    <>
      {projects.map((project, key) => {
        return (
          <Col key={key} sm={6} md={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  key={key}
                  className={
                    isVisible
                      ? " proj-imgbx animate__animated animate__fadeInUpBig  animate__faster"
                      : " proj-imgbx"
                  }
                >
                  <img
                    className="images-work"
                    src={project.img}
                    alt={project.label}
                  />
                  <div className="proj-txtx">
                    <h5 className="wrap text-dark">{project.label}</h5>
                    <span>{project.description} </span>
                    <p>
                      {" "}
                      See my work on{" "}
                      <a
                        href="https://github.com/ericbalbas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark"
                      >
                        GitHub
                      </a>
                      .{" "}
                    </p>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        );
      })}
    </>
  );
};
