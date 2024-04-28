import React, { useContext } from "react";
import { Context } from "../store/appContext";

const RaceResults = ({ raceResults }) => {
  const { store } = useContext(Context);

  const selectedRound = store.selectedRound;
  const selectedCircuit = store.circuitsByRound.find(round => round.round === selectedRound);
  const circuitName = selectedCircuit ? selectedCircuit.circuits[0].circuitName : "";
  
  return (
    <div>
      <h2>{circuitName}</h2> {/* Display circuit name above the table */}
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Constructor</th>
            {/* Add other relevant race result fields here */}
          </tr>
        </thead>
        <tbody>
          {/* Iterate over race results and render each row */}
          {raceResults.map((result, index) => (
            <tr key={index}>
              <td>{result.position}</td>
              <td>{result.Driver.givenName} {result.Driver.familyName}</td>
              <td>{result.Constructor.name}</td>
              {/* Add other relevant race result fields here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RaceResults;