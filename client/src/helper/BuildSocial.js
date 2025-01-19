import React from "react";
import { Nav } from "react-bootstrap";
export const BuildNavLinks = ({ config }) => {
  return (
    <>
      {config.map((link, key) => (
        <Nav.Link key={key} href={link.path}>
          {link.label}
        </Nav.Link>
      ))}
    </>
  );
};
