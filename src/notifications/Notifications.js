import React, { useState } from "react";
import TopBar from "../components/TopBar";
import CloseIcon from "@mui/icons-material/Close";
import nothingimg from "../assets/img/nothing.png";

import "../assets/css/Notifications.css";

export default function Notifications() {
  const [notices, setNotices] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem turpis at aenean eget. Nisl, nec quam proin purus.",
    "consectetur adipiscing elit. Lorem turpis at aenean eget.Lorem ipsum dolor sit amet,  ",
    "Nisl, nec quam proin purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem turpis at aenean eget. Nisl, nec quam proin purus.",
    "ipsum dolor sit amet, consectetur adipiscing elit. Lorem turpis at aenean eget. Nisl, nec quam proin purus.Lorem ",
  ]);

  const notifications_div = ({ key, message }) => (
    <div key={key} className="notification">
      <div className="notification_icon">I</div>
      <div className="message_div">
        <p>{message}</p>
      </div>
      <div
        onClick={setNotices((current) =>
          current.filter((_, index) => index !== key)
        )}
        style={{ cursor: "pointer" }}
      >
        <CloseIcon />
      </div>
    </div>
  );
  return (
    <div
      className="notifications"
      style={{ backgroundColor: notices.length === 0 && "white" }}
    >
      <TopBar />
      <h2>Notifications</h2>
      <div className="notifications_div">
        {notices.length !== 0 ? (
          notices.map((msg, index) =>
            notifications_div({ key: index, message: msg })
          )
        ) : (
          <div
            style={{
              backgroundImage: `url(${nothingimg})`,
              height: "50%",
              width: "100%",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flexDirection: "column",
            }}
          >
            <h2 style={{ color: "#E49531" }}>No new Notifications</h2>
            <p style={{ color: "#394160" }}>
              All your Notifications will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
