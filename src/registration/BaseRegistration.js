import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/BaseRegistration.css";
import Logo from "../components/Logo";

export default function BaseRegistration({
  title,
  titleaction,
  inputDiv,
  btntext,
}) {
  return (
    <div className="base_registration">
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
          <h2>{titleaction}</h2>

          {inputDiv}

          <div className="btn">
            <Link className="link" to={"/dashboard"}>
              {btntext}
            </Link>
          </div>

          <div className="to_login">
            <p>
              {/* Do you already have an account? <span>Login here</span> */}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
