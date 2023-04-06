import React from "react";
import "./ComingSoon.css";
import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <div className="comingSoonContainer">
      <div className="BigLogo mainLogo">Coming Soon</div>

      <p className="comingSoonPara">
        This page shows all the projects related to that particular stack
      </p>
    </div>
  );
}

export default ComingSoon;
