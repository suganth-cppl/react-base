import React from "react";
import Header from "./../components/header";
import rectImg from "./../images/Rectangle.png";
import RegisterComponent from "./../components/register";
import { useTranslation } from "react-multi-lang";
import OtpComponent from "./../components/otp";

const Register = () => {
  const t = useTranslation();

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col" style={{ padding: "7rem" }}>
            <h2>{t("register")}</h2>
            <small>{t("homedesc")}</small>
            <RegisterComponent />
            <OtpComponent />
          </div>
          <div className="col text-center">
            <img
              alt="background of the website"
              src={rectImg}
              style={{
                objectFit: "scale-down",
                height: "40rem",
                paddingTop: "4rem",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
