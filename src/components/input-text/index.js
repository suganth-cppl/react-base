import React from "react";

const InputText = ({
  title,
  type = "text",
  className = "",
  placeholder = " ",
  onChange = () => {},
}) => {
  const x = Math.floor(Math.random() * 100 + 1);

  return (
    <div class="form-floating mb-3">
      <input
        id={`floatingInput${x}`}
        type={type}
        className={`form-control ${className}`}
        placeholder={placeholder}
        onChange={onChange}
      />
      <label for={`floatingInput${x}`}>{title}</label>
    </div>
  );
};

export default InputText;
