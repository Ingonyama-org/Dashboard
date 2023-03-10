import React from "react";
import "../assets/css/TopBar.css";

import SearchIcon from "@mui/icons-material/Search";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function TopBar() {
  return (
    <div className="dash_top">
      <div className="search_div">
        <SearchIcon style={{ color: "#181B1A" }} />
        <input placeholder="search" />
      </div>
      <div className="profile_on_dash">
        <SentimentSatisfiedAltIcon />
        <div className="profile_name">
          <p>Welcome</p>
          <h4>Lion Simba</h4>
        </div>
        <div className="drop_down">
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
}
