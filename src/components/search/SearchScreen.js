import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { CharactersCard } from "../characters/CharactersCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { list } = useSelector((state) => state.characters);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const getCharactersByName = (name = "") => {
    if (name === "") {
      return [];
    }
    name = name.toLowerCase();

    return list?.results?.filter(
      (item) =>
        item.name.toLowerCase().includes(name) ||
        item.species.toLowerCase().includes(name) ||
        item.gender.toLowerCase().includes(name) ||
        item.created.toLowerCase().includes(name)
    );
  };

  const characterFileted = useMemo(() => getCharactersByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Searchs</h1>
      <hr />

      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-4">
          <h4>Search Rick And Morty</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un Heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button className="btn btn-primary mt-3 btn-block" type="submit">
              Search...
            </button>
          </form>
        </div>

        <div className="col-4">
          <h4>Results</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">Search a Character</div>
          ) : (
            characterFileted?.length === 0 && (
              <div className="alert alert-danger">
                There are no Results: {q}
              </div>
            )
          )}

          {characterFileted?.map((item) => (
            <CharactersCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
