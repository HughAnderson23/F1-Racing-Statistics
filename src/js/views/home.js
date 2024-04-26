// Home.js
import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
// import QualiResults from "/src/js/component/QualiResults.js";
// import RaceResults from "/src/js/component/RaceResults.js";

import Body from "/src/js/component/body.js";
import RaceSelector from "/src/js/component/raceselector.js";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchDrivers(2024);
    actions.fetchCircuits(2024); 
  }, []);

  // Check if circuitsByRound is defined
  if (!store.circuitsByRound) {
    return <div>Loading...</div>; // or return null if you want to render nothing until data is loaded
  }

  return (
    <div className="text-center home-container">
      <RaceSelector />
      
      <Body />
      {/* Qualifier results component*/}
      {/* <QualiResults results={store.qualifyingResults} /> */}
      {/* Race results component */}
      {/* <RaceResults raceResults={store.raceResults} /> */}
    </div>
  );
};

export default Home;
