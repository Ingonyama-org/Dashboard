import React, { useState } from "react";
import SideNavbar from "./components/SideNavbar";
import Dashboard from "./Dashboard/Dashboard";
import Notifications from "./notifications/Notifications";
import Ourlions from "./ourlions/Ourlions";

import "./Main.css";
import Upload from "./upload/Upload";
import LionProfile from "./lionProfile/LionProfile";

export default function Main() {
  const [isDashActive, setIsDashActive] = useState(true);
  const [isLionsActive, setIsLionsActive] = useState(false);
  const [isNoticeActive, setIsNoticeActive] = useState(false);
  const [isUploadActive, setIsUploadActive] = useState(false);
  const [isLionProfileActive, setIsLionProfileActive] = useState(false);
  const [lionDetails, setLionDetails] = useState({});

  return (
    <div className="main">
      <div className="sidebar_">
        <SideNavbar
          isDashActive={isDashActive}
          isLionsActive={isLionsActive}
          isNoticeActive={isNoticeActive}
          isUploadActive={isUploadActive}
          setIsDashActive={setIsDashActive}
          setIsLionsActive={setIsLionsActive}
          setIsNoticeActive={setIsNoticeActive}
          setIsUploadActive={setIsUploadActive}
          setIsLionProfileActive={setIsLionProfileActive}
        />
      </div>
      <main className="mains">
        {isDashActive && <Dashboard />}
        {isLionsActive && (
          <Ourlions
            setLionDetails={setLionDetails}
            setIsDashActive={setIsDashActive}
            setIsLionsActive={setIsLionsActive}
            setIsNoticeActive={setIsNoticeActive}
            setIsUploadActive={setIsUploadActive}
            setIsLionProfileActive={setIsLionProfileActive}
          />
        )}
        {isNoticeActive && <Notifications />}
        {isUploadActive && <Upload />}
        {isLionProfileActive && <LionProfile lionDetails={lionDetails} />}
      </main>
    </div>
  );
}
