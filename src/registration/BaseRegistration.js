import React from "react";
import { Link, Router } from "react-router-dom";
import "../assets/css/BaseRegistration.css";
import Logo from "../components/Logo";

export default function BaseRegistration({ title, inputDiv, btntext }) {
  return (
    <div className="base_registration">
      {/* <Link to={"/dashboard"}>{btntext}</Link> */}

      <header>
        <Logo />
      </header>
      <main>
        <div className="welcome_div">
          <div className="inner_welcome_div">
            <h1>{title}</h1>
            <p>Roar for africa</p>
          </div>
        </div>

        <div className="base_registration_div">
          <h2>Sign up</h2>

          {inputDiv}

          {/* <ul className="btn"> */}
          {/* </ul> */}

          <div className="to_login">
            <p>
              Do you already have an account? <span>Login here</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
