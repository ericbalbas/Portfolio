import React from 'react'
import { Nav } from "react-bootstrap";
export const BuildNavLinks = ({ config, activeLink, setActiveLink }) => {
  return (
    <>
      {config.map((link, key) => (
        <Nav.Link
          key={key}
          href={link.path}
          className={
            activeLink === link.label
              ? `${link.icon ? "icons" : ""} active navbar-link text-light p3`
              : `${link.icon ? "icons" : ""} navbar-link text-light p-3`
          }
          onClick={() => setActiveLink(link.label)}>
          <span>
            {link.icon ? link.icon : link.label}
          </span>
        </Nav.Link>
      ))}
    </>
  );
};
