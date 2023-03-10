import React from "react";
import TopBar from "../components/TopBar";
import "../assets/css/OurLions.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { LionsData } from "../data";

export default function Ourlions({
  setIsLionProfileActive,
  setIsDashActive,
  setIsLionsActive,
  setIsNoticeActive,
  setIsUploadActive,
  setLionDetails,
}) {
  const identified_lions_images = ({ key, name, age, park, imageUrl }) => (
    <div
      key={key}
      className="image_div"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => {
        setIsLionProfileActive(true);
        setIsDashActive(false);
        setIsLionsActive(false);
        setIsNoticeActive(false);
        setIsUploadActive(false);
        setLionDetails({
          name: name,
          age: age,
          park: park,
          imageUrl: imageUrl,
        });
      }}
    >
      <div className="image_detail_div">
        <div className="name_age">
          <p>{name}</p>
          <p>{age} years</p>
        </div>
        <div className="park_name">
          <p>{park}</p>
        </div>
      </div>
    </div>
  );
  const pending_lions_images = ({ key, imageUrl, name }) => (
    <div
      key={key}
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div>
        <p>{name}</p>
      </div>
    </div>
  );

  return (
    <div className="ourlions">
      <TopBar />

      <div className="identified_lions">
        <div className="identified_lions_header">
          <h2>Identified Lions</h2>
          <div className="find_btn">
            <p>Find New Lion</p>
          </div>
        </div>
        <div className="images">
          {LionsData.map((item) =>
            Object.values(item["indentified"]).map(
              ({ name, age, park, imageUrl }, index) =>
                identified_lions_images({
                  key: index,
                  name: name,
                  age: age,
                  park: park,
                  imageUrl: imageUrl,
                })
            )
          )}
        </div>
      </div>

      <div className="pending_lions">
        <div className="pending_lions_header">
          <h3>Pending lions to be identified</h3>
          <MoreHorizIcon />
        </div>

        <div className="images">
          {LionsData.map((item) =>
            Object.values(item["pending"]).map(({ name, imageUrl }, index) =>
              pending_lions_images({
                key: index,
                name: name,
                imageUrl: imageUrl,
              })
            )
          )}
        </div>
      </div>
    </div>
  );
}
