import React from 'react'

import classes from "./CardT.module.css"

const CardT = (props) => {
  return (
    <div className={classes.cardT}>{props.children}</div>
  )
}

export default CardT;