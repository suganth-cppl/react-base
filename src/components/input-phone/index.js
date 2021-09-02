import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

import "./style.scss";

const InputPhone = ({
  defaultCountry = "us",
  onChange = () => {},
  value,
  title,
}) => {
  return (
    <>
      <label>{title}</label>
      <PhoneInput country={defaultCountry} value={value} onChange={onChange} />
    </>
  );
};

export default InputPhone;
