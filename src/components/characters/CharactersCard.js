import React from "react";
import { Link } from "react-router-dom";

export const CharactersCard = ({
  created,
  gender,
  image,
  id,
  location,
  name,
  species,
  status,
}) => {
  return (
    <div className="row">
      <div className="col animate__animated animate__fadeIn">
        <div
          className="card"
          style={{
            marginTop: "10px",
            border: "2px solid green",
          }}
        >
          <div className="row no-gutters">
            <div className="col-6">
              <img src={image} alt="" className="card-img" />
            </div>
            <div className="col-6">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text  mb-0" style={{ fontSize: "12px" }}>
                  {location.name}
                </p>
                <p className="text-muted  mb-0">{species}</p>
                <p className="text-muted mb-0">{status}</p>

                <Link to={`/characters/${id}`}>More...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
