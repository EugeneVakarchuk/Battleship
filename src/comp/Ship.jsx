import React from 'react';
import { Cell } from './Battlefield';
import classes from '../styles.module.css'


const Ship = ({ size, ...props }) => {

  const matrix = [];
  for (let i = 0; i < size; i++) {
    matrix.push(i);
  }

  return (
    <div className={classes.ship}>
      {
        matrix.map((cell, index) =>
          <Cell />
        )
      }
    </div>
  );

};


export default Ship;