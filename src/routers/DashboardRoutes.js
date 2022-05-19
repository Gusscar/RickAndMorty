import React from "react";

import { Routes, Route } from "react-router-dom";

import { Navbar } from "../ui/NavBar";
import { MortyScreen } from "../components/morty/MortyScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { CharactersScreen } from "../components/characters/CharactersScreen";
import { LocationScreen } from "../components/location/LocationScreen";

export const DashboardRoutes = () => {
  const containerStyle = {
    backgroundImage:
      "url(https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1687,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1600/fl_lossy,q_auto/v1573446366/191107-leon-rick-morty-tease_nmv5um)",
    width: "100vp",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={containerStyle}>
      <Navbar />
      <div style={{ maxWidth: "100%" }}>
        <Routes>
          <Route path="/location" element={<LocationScreen />} />
          <Route path="/characters" element={<MortyScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="characters/:id" element={<CharactersScreen />} />

          <Route path="/" element={<MortyScreen />} />
        </Routes>
      </div>
    </div>
  );
};
