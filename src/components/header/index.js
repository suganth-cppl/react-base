import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { useTranslation, setLanguage } from "react-multi-lang";

const Header = (props) => {
  const t = useTranslation();

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="border-bottom">
      <Container fluid>
        <Navbar.Brand href="/">
          {" "}
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/900px-Android_O_Preview_Logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          {t("abnft")}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex me-auto ms-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
          </Form>
          <Nav>
            <Button
              variant="success"
              className="me-2"
              onClick={() => setLanguage("hi")}
            >
              {t("signin", { name: "João" })}
            </Button>
            <Button onClick={() => setLanguage("en")}>{t("signout")}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
