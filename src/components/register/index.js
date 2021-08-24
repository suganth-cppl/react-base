import React from "react";
import { useTranslation } from "react-multi-lang";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
  const t = useTranslation();
  return (
    <div className="bg-white mt-3 p-5 rounded">
      <div className="form-group mb-4">
        <small className="text-secondary">{t("name")}</small>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group mb-4">
        <small className="text-secondary">{t("username")}</small>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group mb-4">
        <small className="text-secondary">{t("emailaddress")}</small>
        <input type="email" className="form-control" />
      </div>
      <div className="form-group mb-4">
        <small className="text-secondary">{t("password")}</small>
        <input type="password" className="form-control" />
      </div>
      <div className="form-group mb-4">
        <small className="text-secondary">{t("confirmpassword")}</small>
        <input type="password" className="form-control" />
      </div>
      <div className="form-group mt-2 mb-4">
        <button type="button" className="btn btn-primary btn-lg w-100">
          {t("signup")}
        </button>
      </div>
      <div className="form-group mt-2">
        <small className="text-secondary">
          {t("haveaccount")} <a href="/">{t("signin")}</a>
        </small>
      </div>
    </div>
  );
};

export default RegisterComponent;
