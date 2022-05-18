import React, { useEffect, useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { fechtAllCharacters } from "../../store/slices/characters";
import { CharactersList } from "../characters/CharactersList";
import { Pagination } from "../pagination/Pagination";

export const MortyScreen = () => {
  const { list } = useSelector((state) => state.characters);

  const dispatch = useDispatch();
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    dispatch(fechtAllCharacters(url));
  }, [dispatch]);

  const onPrevious = () => {
    dispatch(fechtAllCharacters(list?.info?.prev));
  };
  const onNext = () => {
    dispatch(fechtAllCharacters(list?.info?.next));
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <CharactersList />

      <Pagination
        prev={list?.info?.prev}
        next={list?.info?.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  );
};
