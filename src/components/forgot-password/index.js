import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-multi-lang";

const ForgotPasswordComponent = () => {
  const t = useTranslation();

  return (
    <div className="bg-white mt-3 p-5 rounded">
      <div className="form-group mb-4">
        <small className="text-secondary">{t("emailaddress")}</small>
        <input type="email" className="form-control" />
      </div>

      <div className="form-group d-flex justify-content-between">
        <small className="text-secondary">
          <Link to="/forgot-password">{t("signup")}</Link>
        </small>
        <small className="text-secondary">
          <Link to="/forgot-password">{t("signin")}</Link>
        </small>
      </div>
      <div className="form-group mt-2">
        <button type="button" className="btn btn-primary btn-lg w-100">
          {t("sendemail")}
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;
