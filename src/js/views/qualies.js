// qualies.js
import React, { useEffect, useContext } from "react";
import "../../styles/qualies.css";
import { Context } from "../store/appContext";
import QualiResults from "/src/js/component/qualiresults.js";
// import RaceResults from "/src/js/component/RaceResults.js";
// import Banner from "../component/banner";
// import Body from "/src/js/component/body.js";
import QualiSelector from "/src/js/component/qualiselector.js";

export const Qualies = () => {
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
              <h1>Qualifying Results</h1>
              <QualiSelector /> 
              <div className="center-content">  
                <QualiResults results={store.qualifyingResults} />
              </div>
            </div>
        </div>
    </div>
  );
};

export default Qualies;