import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-multi-lang";

const LoginComponent = () => {
  const t = useTranslation();
  return (
    <div className="bg-white mt-3 p-5 rounded">
      <div className="form-group mb-4">
        <small className="text-secondary">{t("emailaddress")}</small>
        <input type="email" className="form-control" />
      </div>
      <div className="form-group">
        <small className="text-secondary">{t("password")}</small>
        <input type="password" className="form-control" />
      </div>
      <div className="form-group text-end mt-2">
        <small className="text-secondary">
          <Link to="/forgot-password">{t("forgotpassword")}</Link>
        </small>
      </div>
      <div className="form-group mt-2">
        <button type="button" className="btn btn-primary btn-lg w-100">
          {t("signin")}
        </button>
      </div>
      <div className="form-group mt-2">
        <small className="text-secondary">
          {t("donthaveaccount")} <a href="/">{t("signup")}</a>
        </small>
      </div>
    </div>
  );
};

export default LoginComponent;
