import React from "react";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import "../assets/css/Dashboard.css";

import Piechart from "../graphs/Piechart";
import Bargarph from "../graphs/Bargraph";
import Radarchart from "../graphs/Radarchart";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CodeIcon from "@mui/icons-material/Code";
import TopBar from "../components/TopBar";

export default function Dashboard() {
  const status_cards = ({ status_title, Icon, count, percentage }) => (
    <div className="status_card">
      <p>{status_title}</p>
      <div>
        <div className="status_icon_div">{Icon}</div>
        <h3 className="number_count">{count}</h3>
      </div>
      <p>{percentage}</p>
    </div>
  );

  const stats_div = ({ stat_title, Graph, stats_categories }) => (
    <div className="stats_div">
      <h3 className="stat_title">{stat_title}</h3>
      <div className="graph_and_keys">
        <div className="graph">{Graph}</div>
        <div className="graph_keys">
          <ul>
            {Object.keys(stats_categories).map((item, index) => (
              <li key={index}>
                <p className="stat_cat">{item}</p>
                <p className="stat_percentage">
                  {Object.values(stats_categories)[index]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashboard">
      <TopBar />
      <div className="salute">
        <h1>
          <span>Hello,</span> Lion Simba
        </h1>
        <p>Check your activities in this dashboard.</p>
      </div>

      <div className="status">
        {status_cards({
          status_title: "Total Identified",
          Icon: <RecentActorsIcon className="status_icon" />,
          count: "300",
          percentage: "85%",
        })}
        {status_cards({
          status_title: "Pending Identification",
          Icon: <HourglassTopIcon className="status_icon" />,
          count: "45",
          percentage: "15.20%",
        })}
        {status_cards({
          status_title: "Models",
          Icon: <CodeIcon className="status_icon" />,
          count: "15",
          percentage: "90.80%",
        })}
      </div>

      <div className="statistics">
        {stats_div({
          stat_title: "Gender/sex",
          Graph: <Piechart />,
          stats_categories: { Male: "40%", Female: "60%" },
        })}
        {stats_div({
          stat_title: "Age",
          Graph: <Radarchart />,
          stats_categories: {
            "0-13 yrs": "60%",
            "14-18+ yrs": "40%",
          },
        })}
      </div>

      <div className="progress_div">
        <Bargarph />
      </div>
    </div>
  );
}
