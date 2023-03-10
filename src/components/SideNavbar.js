import React from "react";
import Logo from "./Logo";
import "../assets/css/SideNavbar.css";
import GridViewIcon from "@mui/icons-material/GridView";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import PetsIcon from "@mui/icons-material/Pets";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function SideNavbar({
  isDashActive,
  isLionsActive,
  isNoticeActive,
  setIsDashActive,
  setIsLionsActive,
  setIsNoticeActive,
  setIsUploadActive,
  setIsLionProfileActive,
}) {
  const sidebar_option_div = ({ className, onClick, Icon, option }) => (
    <div className={className} onClick={onClick}>
      <div>
        {Icon}
        <h3 className="option_text">{option}</h3>
      </div>
    </div>
  );
  return (
    <div className="sidebar">
      <Logo />
      <div className="sidebar_options">
        {sidebar_option_div({
          className: `sidebar_option_div ${isDashActive && "active"}`,
          onClick: () => {
            setIsLionsActive(false);
            setIsDashActive(true);
            setIsNoticeActive(false);
            setIsUploadActive(false);
            setIsLionProfileActive(false);
          },
          Icon: <GridViewIcon />,
          option: "Dashboard",
        })}

        {sidebar_option_div({
          className: `sidebar_option_div ${isLionsActive && "active"}`,
          onClick: () => {
            setIsLionsActive(true);
            setIsDashActive(false);
            setIsNoticeActive(false);
            setIsUploadActive(false);
            setIsLionProfileActive(false);
          },
          Icon: <PetsIcon />,
          option: "Our Lions",
        })}

        {sidebar_option_div({
          className: `sidebar_option_div ${isNoticeActive && "active"}`,
          onClick: () => {
            setIsLionsActive(false);
            setIsDashActive(false);
            setIsNoticeActive(true);
            setIsUploadActive(false);
            setIsLionProfileActive(false);
          },
          Icon: <NotificationsIcon />,
          option: "Notifications",
        })}
      </div>
      <div
        className="upload_div"
        onClick={() => {
          setIsLionsActive(false);
          setIsDashActive(false);
          setIsNoticeActive(false);
          setIsUploadActive(true);
          setIsLionProfileActive(false);
        }}
      >
        <DriveFolderUploadIcon className="upload_icon" />
        <h4>Upload folder</h4>
      </div>
    </div>
  );
}
