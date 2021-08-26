import React from "react";
import { useTranslation } from "react-multi-lang";
import { Link } from "react-router-dom";
import InputText from "../input-text";

const RegisterComponent = () => {
  const t = useTranslation();
  return (
    <div className="bg-white mt-3 p-5 rounded">
      <div className="form-group mb-4">
        <InputText title={t("name")} />
      </div>
      <div className="form-group mb-4">
        <InputText title={t("username")} />
      </div>
      <div className="form-group mb-4">
        <InputText title={t("emailaddress")} />
      </div>
      <div className="form-group mb-4">
        <InputText title={t("password")} type="password" />
      </div>
      <div className="form-group mb-4">
        <InputText title={t("confirmpassword")} type="password" />
      </div>
      <div className="form-group mt-2 mb-4">
        <button type="button" className="btn btn-primary btn-lg w-100">
          {t("signup")}
        </button>
      </div>
      <div className="form-group mt-2">
        <small className="text-secondary">
          {t("haveaccount")} <Link to="/">{t("signin")}</Link>
        </small>
      </div>
    </div>
  );
};

export default RegisterComponent;
