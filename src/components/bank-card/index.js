import React from "react";
import { useTranslation } from "react-multi-lang";

const BankCard = ({
  isActive = false,
  onClick = () => {},
  name,
  type,
  number,
}) => {
  const t = useTranslation();
  return (
    <div
      onClick={onClick}
      className={`bg-white shadow p-3 rounded mb-3 ${
        isActive && `border border-3 border-primary`
      }`}
    >
      <div>
        <label>
          <input
            type="radio"
            name="bank-card"
            className="me-2"
            checked={isActive}
            onChange={() => {}}
          />
          {type} {number}
        </label>
      </div>
      <div>
        <small className="text-secondary">{name}</small>
      </div>
      <div className="mt-3 text-end">
        <button className="btn btn-primary btn-sm">{t("removecard")}</button>
      </div>
    </div>
  );
};

export default BankCard;
