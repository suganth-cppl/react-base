import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useTranslation } from "react-multi-lang";

const Header = (props) => {
  const t = useTranslation();

  return (
    <Navbar bg="light" expand="sm" sticky="top" className="border-bottom">
      <Navbar.Brand href="/web">GUARDIAN</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="d-flex mr-auto">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
        </Form>
        <Nav>
          <Button variant="success" className="mr-2">
            {t("signin", { name: "João" })}
          </Button>
          <Button>Sign Out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
