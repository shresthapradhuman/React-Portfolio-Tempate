import React from "react";
import GoogleMapReact from "google-map-react";
import { RiMapPinLine } from "react-icons/ri";
import './GoogleMap.scss';

function GoogleMap() {
  const LocationPin = ({ text }) => {
    return (
      <div className="map__pin">
        <div className="map__pin-icon">
          <RiMapPinLine />
        </div>
        <p className="map__pin-text">{text}</p>
      </div>
    );
  };
  return (
    <>
      <div className="map__container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAd80zHaQ1mgqSM_8lnmNLGipdIlh7RbHE" }}
          defaultCenter={{
            address: "4-chōme-6-3 Maebarahigashi, Funabashi, Chiba 274-0824",
            lat: 35.69824145136708,
            lng: 140.02669765568493,
          }}
          defaultZoom={14}
        >
          <LocationPin
            lat={35.69824145136708}
            lng={140.02669765568493}
            text="4-chōme-6-3 Maebarahigashi, Funabashi, Chiba 274-0824"
          />
        </GoogleMapReact>
      </div>
    </>
  );
}

export default GoogleMap;
