import React, { useEffect, useContext, } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Tabviews = () => {
    // const navigate = useNavigate();
  
    return (
      <div>
        <Link to = "/qualies">     
            <button id="qualifier-results-btn">Qualifier Results</button>
        </Link> 
        <Link to = "/raceresults">  
          <button id="race-results-btn">Race Results</button>
        </Link>
      </div>
    );
  };
  
  export default Tabviews;