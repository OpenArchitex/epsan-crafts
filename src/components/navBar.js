import * as React from "react";
import { Container, Image, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import brandLogo from "../images/brandLogo.svg";
import ListGroup from "react-bootstrap/ListGroup";

const NavBar = () => (
  <>
    <Row>
      <Container className="text-center pt-4">
        <Image src={brandLogo} className="nav-image" />
      </Container>
    </Row>
    <Row>
      <Nav>
        <Container className="navbar-links d-flex py-4 justify-content-center">
          <Nav.Link className="link-secondary" href="/">
            Portfolio
          </Nav.Link>
          <Nav.Link className="link-secondary" href="/about">
            About
          </Nav.Link>
        </Container>
        <Container className="d-flex justify-content-center navbar-link-icons pb-3">
          <Nav.Link className="px-3 link-secondary" href="tel:+94770444855">
            <FontAwesomeIcon icon={["fas", "phone"]} />
          </Nav.Link>
          <Nav.Link
            className="px-3 link-secondary"
            href="https://www.facebook.com/people/Epsan-Crafts/100086183629982/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </Nav.Link>
          <Nav.Link
            className="px-3 link-secondary"
            href="mailto:email2gihani@gmail.com"
          >
            <FontAwesomeIcon icon={["far", "envelope"]} />
          </Nav.Link>
        </Container>
      </Nav>
    </Row>
  </>
);

export default NavBar;
