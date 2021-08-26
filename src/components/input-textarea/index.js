import React from "react";

const InputTextArea = ({ title, rows, className = "", placeholder = " " }) => {
  const x = Math.floor(Math.random() * 100 + 1);

  return (
    <div class="form-floating  mb-3">
      <textarea
        className={`form-control ${className}`}
        rows={rows}
        placeholder={placeholder}
        id={`floatingTextarea${x}`}
      ></textarea>
      <label for={`floatingTextarea${x}`}>{title}</label>
    </div>
  );
};

export default InputTextArea;
