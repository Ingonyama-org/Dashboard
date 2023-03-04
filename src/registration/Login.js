import React from "react";
import InputDiv from "../components/InputDiv";
import BaseRegistration from "./BaseRegistration";

export default function Login() {
  return (
    <BaseRegistration
      title="Log into your ingonyama account."
      inputDiv={
        <>
          <InputDiv label="Username" type="text" placeholder="simba" />
          <InputDiv label="Email" type="email" placeholder="simba@lion.com" />
        </>
      }
      btntext="Login"
    />
  );
}
