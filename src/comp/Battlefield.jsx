import React from 'react';
import classes from '../styles.module.css';

const Cell = ({ ...props }) => {
  return (
    <div className={classes.cell}>
    </div>
  )
}

let matrix = [];

for (let y = 0; y < 10; y++) {
  matrix.push(new Array(0));
  for (let x = 0; x < 10; x++) {
    matrix[y].push(new Array(0))
  }
}



const Battlefield = ({ ...props }) => {

  return (
    <div className={classes.battlefield}>
      <div>
        {
          matrix.map((column, indexY) =>
            <div key={indexY} className={classes.column}>
              {column.map((cell, indexX) =>
                <Cell posY={indexY + 1} posX={indexX + 1} key={
                  indexY.toString() + indexX.toString()
                } />
              )
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export { Battlefield, Cell };