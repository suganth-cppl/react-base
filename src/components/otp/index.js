import React from "react";
import Header from "./../header";
import { Link } from "react-router-dom";
import { useTranslation } from "react-multi-lang";
import InputText from "./../input-text";

const OtpComponent = () => {
  const t = useTranslation();
  return (
    <div className="bg-white mt-3 p-5 rounded">
      <div className="form-group mb-4">
        <InputText title={t("otp")} />
      </div>
      <div className="form-group text-end">
        <small className="text-secondary">
          {t("dontreceivecode")}{" "}
          <Link to="/forgot-password">{t("resend")}</Link>
        </small>
      </div>
      <div className="form-group mt-2">
        <button type="button" className="btn btn-primary btn-lg w-100">
          {t("verify")}
        </button>
      </div>
    </div>
  );
};

export default OtpComponent;
