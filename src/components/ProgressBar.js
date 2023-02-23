import React from "react";

import classes from "./ProgressBar.module.css"

const ProgressBar = ({ bgcolor, completed }) => {
  
  
    const fillerStyles = {
      width: `${completed}%`,
      backgroundColor: bgcolor,
    }

    return (
      <div className={classes.containerStyles}>
        <div className={classes.fillerStyles} style={fillerStyles}>
          <span className={classes.labelStyles}>{`${completed.toFixed(2)}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;