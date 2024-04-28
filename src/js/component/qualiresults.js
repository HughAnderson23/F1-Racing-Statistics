import React, { useContext } from "react";
import { Context } from "../store/appContext";

const QualiResults = ({ results }) => {
  const { store } = useContext(Context);

  // Find the selected circuit's name based on the selectedRound
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
            <th>Q1 Time</th>
            <th>Q2 Time</th>
            <th>Q3 Time</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.position}</td>
              <td>{result.Driver.givenName} {result.Driver.familyName}</td>
              <td>{result.Constructor.name}</td>
              <td>{result.Q1}</td>
              <td>{result.Q2}</td>
              <td>{result.Q3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QualiResults;



