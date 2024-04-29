import React, { useEffect, useContext, } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/tabs.css";

export const Tabviews = () => {
  return (
      <div className="tab-container">
          <Link to="/qualies">
              <button id="qualifier-results-btn">Qualifier Results</button>
          </Link>
          <Link to="/raceresults">
              <button id="race-results-btn">Race Results</button>
          </Link>
      </div>
  );
};

export default Tabviews;