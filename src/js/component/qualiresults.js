import React from "react";

const QualiResults = ({ results }) => {
  return (
    <div>
      
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