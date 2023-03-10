import React from "react";
import InputDiv from "../components/InputDiv";
import BaseRegistration from "./BaseRegistration";

export default function Signpup() {
  return (
    <BaseRegistration
      title="Creat your ingonyama account."
      inputDiv={
        <>
          <InputDiv label="Email" type="email" placeholder="simba@lion.com" />
          <InputDiv label="Password" type="password" placeholder="*******" />
          <InputDiv
            label="Confirm Password"
            type="password"
            placeholder="*******"
          />
        </>
      }
      btntext="Register"
    />
  );
}
