import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import QualiResults from "/src/js/component/qualiresults.js";

const QualifierResults = ({ results }) => {
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
    <div>
    {/* Qualifier results component*/}
    <QualiResults results={store.qualifyingResults} />
    </div> 
  );
};

export default QualifierResults;