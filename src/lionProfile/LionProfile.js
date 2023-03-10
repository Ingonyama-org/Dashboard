import React from "react";
import TopBar from "../components/TopBar";

import "../assets/css/LionProfile.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "80%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
const libraries = ["geometry", "drawing"];
export default function LionProfile({ lionDetails }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
    libraries: libraries,
  });

  return (
    <div className="lionprofile">
      <TopBar />
      <div className="lion_main">
        <div className="profile">
          <div
            className="image"
            style={{
              backgroundImage: `url(${lionDetails["imageUrl"]})`,
            }}
          ></div>
          <div className="details">
            <div className="detail">
              <div>
                <h3 className="name">{lionDetails["name"]}</h3>
                <p className="age">{lionDetails["age"]} years</p>
              </div>
              <div className="park">
                <p>{lionDetails["park"]}</p>
              </div>
            </div>
            <div className="bio">
              Lorem ipsum dolor sit amet consectetur. Et purus diam amet risus
              mauris adipiscing vulputate urna ut. Pulvinar viverra cras amet
              aliquam odio. Leo consequat platea fames dolor sed. Convallis
              volutpat vitae tristique varius. Id sed volutpat sem id. Nisi vel
              praesent sit facilisi eget. Ac lorem elit neque dictum laoreet.
              Augue sociis ut integer ipsum facilisis in augue tellus. Sit quis
              leo odio elementum massa arcu amet cursus.
            </div>
          </div>
        </div>
        <div className="segments">
          <div className="image"></div>
        </div>
        <div className="map">
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          )}
        </div>
      </div>
    </div>
  );
}
