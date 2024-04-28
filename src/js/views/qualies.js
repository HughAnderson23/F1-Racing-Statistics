import React, { useEffect, useContext } from "react";
import "../../styles/qualies.css";
import { Context } from "../store/appContext";
import QualiResults from "/src/js/component/qualiresults.js";
import QualiSelector from "/src/js/component/qualiselector.js";

export const Qualies = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchDrivers(2024);
    actions.fetchCircuits(2024);
    if (store.selectedRound) {
      actions.fetchQualifyingResults(2024, store.selectedRound);
    }
  }, [store.selectedRound]);

  // Check if circuitsByRound is defined
  if (!store.circuitsByRound) {
    return <div>Loading...</div>;
  }

  // Find the selected circuit's name based on the selectedRound
  const selectedCircuit = store.circuitsByRound.find(round => round.round === store.selectedRound);
  const circuitName = selectedCircuit ? selectedCircuit.circuits[0].circuitName : "";

  console.log("Circuit Name:", circuitName); // Log the circuitName

  return (
    <div className="text-center home-container">
      <div className="body">
        <div className="body-inner">
          <h1>Qualifying Results</h1>
          <QualiSelector />
          <div className="center-content">
            {/* Pass circuitName to QualiResults */}
            <QualiResults results={store.qualifyingResults} circuitName={circuitName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualies;

