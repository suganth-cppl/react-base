import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-multi-lang";
import InputText from "../input-text";

const LoginComponent = () => {
  const t = useTranslation();
  return (
    <div className="bg-white mt-3 p-5 rounded">
      <div className="form-group mb-4">
        <InputText title={t("emailaddress")} />
      </div>

      <div className="form-group">
        <InputText title={t("password")} type="password" />
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
          {t("donthaveaccount")} <Link to="/">{t("signup")}</Link>
        </small>
      </div>
    </div>
  );
};

export default LoginComponent;
