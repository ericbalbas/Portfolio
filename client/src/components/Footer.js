import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { socials } from "../context/Config";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3} className="d-flex justify-content-center align-items-center">
             <Icon className='text-danger brand-logo' icon="simple-icons:imagej" width="200" height="200" />
          </Col>
          <Col md={3}>
            <h4>Contact</h4>
            <p>Email: ericjohnbalbas@gmail.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: santo.tomas batangas PH.</p>
          </Col>
          <Col md={3}>
            <h4>Elsewhere</h4>
            {
             socials.map((social, key) => (
              <p>
              <a href={social.path}>
              {social.icon}{" "}
              {social.label}
              </a>
            </p>
             ))
            }
          </Col>
          <Col md={3}>
            <h4>Quick Links</h4>
            <p><a href="#home">Home</a></p>
            <p><a href="#skills">Skills</a></p>
            <p><a href="#project">Projects</a></p>
            <p><a href="#connect">contact</a></p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2025 Eric John Balbas. All rights reserved.</p>
            <p><a href="#privacy-policy">Privacy Policy</a> | <a href="#terms-of-service">Terms of Service</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
