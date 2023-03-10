import React from "react";
import InputDiv from "../components/InputDiv";
import BaseRegistration from "./BaseRegistration";

export default function Login() {
  return (
    <BaseRegistration
      titleaction="Login"
      title="Log into your ingonyama account."
      inputDiv={
        <>
          <InputDiv label="Email" type="email" placeholder="simba@lion.com" />
          <InputDiv label="Password" type="password" placeholder="*********" />
        </>
      }
      btntext="Login"
    />
  );
}
