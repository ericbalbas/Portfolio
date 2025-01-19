import { React, useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navbarLinks, socials } from "../context/Config";
import { BuildNavLinks } from "../helper/BuildNavLinks";
import { Icon } from "@iconify/react";

const NavBar = ({ contactRef }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolling = window.scrollY > 50 ? true : false;
      console.log("scrolling");
      setScrolled(scrolling);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  const handleConnectClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <Icon
            className="text-danger"
            icon="simple-icons:imagej"
            width="55"
            height="55"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <BuildNavLinks
              config={navbarLinks}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <BuildNavLinks
                config={socials}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
            </div>
            <button className="vvd" onClick={handleConnectClick}>
              <span>let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
