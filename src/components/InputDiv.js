import React from "react";
import "./InputDiv.css";

export default function InputDiv({ label, type, placeholder }) {
  return (
    <div className="input_div">
      <label> {label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
