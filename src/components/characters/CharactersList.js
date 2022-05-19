import React from "react";
import { useSelector } from "react-redux";
import { CharactersCard } from "./CharactersCard";

export const CharactersList = () => {
  const { list } = useSelector((state) => state.characters);

  return (
    <div
      className="row rows-cols-1 row-cols-md-4 g-3 animate__animated animate__fadeIn"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {list?.results?.map((item) => (
        <CharactersCard key={item.id} {...item} />
      ))}
    </div>
  );
};
