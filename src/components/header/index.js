import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Offcanvas,
} from "react-bootstrap";
import { useTranslation, setLanguage } from "react-multi-lang";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { change_lang_action } from "./../../redux/actions/lang_action";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const t = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleChangeLang = () => {
    const lang = state.lang === "en" ? "hi" : "en";
    setLanguage(lang);
    dispatch(change_lang_action(lang));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="white" expand="lg" sticky="top" className="border-bottom">
        <Container fluid>
          <Navbar.Brand onClick={handleShow} role="button">
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
                <NavDropdown.Item onClick={handleChangeLang}>
                  {state.lang === "en" ? "Hindi" : "English"}
                </NavDropdown.Item>
              </NavDropdown>
              <Button
                variant="success"
                className="me-2"
                onClick={() => history.push("/")}
              >
                {t("signin", { name: "João" })}
              </Button>
              <Button onClick={() => history.push("/register")}>
                {t("signup")}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/900px-Android_O_Preview_Logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            {t("abnft")}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link
                active={location.pathname === "/dashboard"}
                href="/dashboard"
              >
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={location.pathname === "/profile"}
                href="/profile"
              >
                Edit Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={location.pathname === "/payment-method"}
                href="/payment-method"
              >
                Payment Method
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={location.pathname === "/seller-settings"}
                href="/seller-settings"
              >
                Seller Settings
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={location.pathname === "/notifications"}
                href="/notifications"
              >
                Notifications
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={location.pathname === "/security"}
                href="/security"
              >
                Security
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
