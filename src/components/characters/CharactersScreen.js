import moment from "moment";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { useParams, Navigate, useNavigate } from "react-router-dom";

export const CharactersScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { list } = useSelector((state) => state.characters);

  const getCharacterById = (id = "") => {
    const idCharacter = parseFloat(id);
    return list?.results.find((item) => item.id === idCharacter);
  };

  const character = useMemo(() => getCharacterById(id), [id]);

  if (!character) {
    return <Navigate to="/" />;
  }

  const { id: created, gender, image, name, species, status } = character;

  const handleReturn = () => {
    navigate(-1);
  };
  return (
    <div
      className="row mt-5"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="col-2">
        <img
          src={image}
          alt={name}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-6 animate__animated animate__fadeIn">
        <h3>{name}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Specie: </b>
            {species}
          </li>
          <li className="list-group-item">
            <b>Status: </b>
            {status}
          </li>
          <li className="list-group-item">
            <b>Gender: </b>
            {gender}
          </li>
          <li className="list-group-item">
            <b>Created: </b>
            {moment(created).format("L")}
          </li>
        </ul>
        <h5 className="mt-3">{character.location.name}</h5>
        <button className="btn btn-primary" onClick={handleReturn}>
          Back
        </button>
      </div>
    </div>
  );
};
