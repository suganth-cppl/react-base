import React from "react";
import { useTranslation } from "react-multi-lang";
import Header from "./../components/header/index";
import rectImg from "./../images/Rectangle.png";
import ForgotPasswordComponent from "./../components/forgot-password/index";
import OtpComponent from "./../components/otp/index";
import RegisterComponent from "./../components/register/index";

const ForgotPassword = () => {
  const t = useTranslation();

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col" style={{ padding: "7rem" }}>
            <h2>{t("forgotpassword")}</h2>
            <small>{t("homedesc")}</small>

            {/* <ForgotPasswordComponent />
            <OtpComponent /> */}

            <RegisterComponent />
          </div>
          <div className="col text-center">
            <img
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

export default ForgotPassword;
