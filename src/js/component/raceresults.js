import React from 'react';

const RaceResults = ({ raceResults }) => {
  return (
    <div>
      <h3>Race Results</h3>
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