import React from "react";
import { useTranslation } from "react-multi-lang";
import InputText from "../input-text";
import InputTextArea from "./../input-textarea";

const ProfileInformation = () => {
  const t = useTranslation();
  return (
    <div className="bg-white mt-3 p-5 rounded">
      <h4> {t("profileinformation")}</h4>

      <div className="form-group mb-4 mt-3">
        <InputText title={t("displayname")} />
      </div>
      <div className="form-group mb-4">
        <InputText title={t("username")} />
      </div>
      <div className="form-group mb-4">
        <InputTextArea title={t("bio")} rows={3} />
      </div>
      <div className="form-group mb-4">
        <InputText title={t("emailaddress")} />
      </div>
      <div className="form-group mb-4">
        <InputText title={t("sociallink")} />
      </div>
      <div className="form-group mt-2">
        <button type="button" className="btn btn-primary btn-lg w-100">
          {t("updateprofile")}
        </button>
      </div>
    </div>
  );
};

export default ProfileInformation;
