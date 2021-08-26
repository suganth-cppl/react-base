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
import { useHistory } from "react-router";
import { useSelector, useDispatch, connect } from "react-redux";
import { change_lang_action } from "./../../redux/actions/lang_action";

const Header = (props) => {
  const t = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleChangeLang = () => {
    const lang = state.lang === "en" ? "hi" : "en";
    setLanguage(lang);
    dispatch(change_lang_action(lang));
  };

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
            <NavDropdown
              title={state.lang === "en" ? "English" : "Hindi"}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="javascript:;" onClick={handleChangeLang}>
                {state.lang === "en" ? "Hindi" : "English"}
              </NavDropdown.Item>
            </NavDropdown>
            <Button
              variant="success"
              className="me-2"
              onClick={() => history.push("/signin")}
            >
              {t("signin", { name: "João" })}
            </Button>
            <Button onClick={() => history.push("/signup")}>
              {t("signup")}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
