// raceresults.js
import React, { useEffect, useContext } from "react";
import "../../styles/raceresults.css";
import { Context } from "../store/appContext";
import RaceResults from "/src/js/component/raceresults.js";
// import RaceResults from "/src/js/component/RaceResults.js";
// import Banner from "../component/banner";
// import Body from "/src/js/component/body.js";
import RaceSelector from "/src/js/component/raceselector.js";

export const RaceRes = () => {
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
      <div className = "body">
            <div className = "body-inner">
              <h1>Race Results</h1>
              <RaceSelector /> 
              <div className="center-content">
                <RaceResults raceResults={store.raceResults} />
              </div>
            </div>
        </div>
    </div>
  );
};

export default RaceRes;