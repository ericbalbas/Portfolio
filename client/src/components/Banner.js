import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { selfContent } from "../context/Config";
import { Typewriter } from "react-simple-typewriter";
import HeaderImg from "../asset/header3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = ( {contactRef} ) => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const greetingsMap = {
      morning: "Good Morning!",
      afternoon: "Good Afternoon!",
      evening: "Good Evening!",
    };

    const getGreeting = () => {
      const now = new Date();
      const hours = now.getHours();

      const timePeriod =
        hours >= 5 && hours < 12
          ? "morning"
          : hours >= 12 && hours < 18
          ? "afternoon"
          : "evening";

      return greetingsMap[timePeriod];
    };

    setGreeting(getGreeting());
  }, []); // Only run on mount

  const handleConnectClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInLeft " : ""
                  }
                >
                  <h2>
                    <span className="tagline">{greeting}</span>
                  </h2>
                  <h1>
                    <span className="wrap">{"I'm Eric John "}</span>
                  </h1>
                  <h1>
                    <span className="wrap text-danger fs-1">
                      <Typewriter
                        words={selfContent}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </span>
                  </h1>
                  <p>
                    Focused Software Developer with experience across scripting,
                    testing, and platform design. Integrates practical
                    full-stack engineering knowledge for enhanced digital
                    experiences. Adapts well to projects of varied scopes and
                    sizes for reliable end-to-end development.
                  </p>
                  <button onClick={handleConnectClick}>
                    Let's connect{" "}
                    <span>
                      <Icon
                        icon="line-md:arrow-right-circle-twotone"
                        width="24"
                        height="24"
                      />
                    </span>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col
            xs={12}
            md={6}
            xl={5}
            className="d-flex justify-content-center align-items-center"
          >
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInRight" : ""
                  }
                >
                  <img src={HeaderImg} alt="Header Img" className="" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
