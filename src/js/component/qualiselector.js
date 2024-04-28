import React, { useContext } from "react";
import { Context } from "../store/appContext";

const QualiSelector = () => {
  const { store, actions } = useContext(Context);

  const handleRaceChange = (e) => {
    const selectedRound = e.target.value;
    actions.fetchQualifyingResults(2024, selectedRound);
  };

  return (
    <div className="race-selector">
      <select value={store.selectedRound} onChange={handleRaceChange}>
        <option value="">Select a race</option>
        {store.circuitsByRound.map((round, roundIndex) => (
          <optgroup label={`Round ${round.round}`} key={roundIndex}>
            {round.circuits.map((circuit, index) => (
              <option key={index} value={round.round}>
                {circuit.circuitName}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
};

export default QualiSelector;