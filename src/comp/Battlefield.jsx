import React, { useEffect, useRef, useState } from 'react';
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

  const battlefieldRef = useRef();
  const [battlefieldSize, setBattlefieldSize] = useState({
    x: null,
    y: null,
    xEnd: null,
    yEnd: null
  })

  useEffect(() => {
    setBattlefieldSize({
      x: battlefieldRef.current.getBoundingClientRect().x,
      y: battlefieldRef.current.getBoundingClientRect().y,
      xEnd: battlefieldRef.current.getBoundingClientRect().x + battlefieldRef.current.offsetWidth,
      yEnd: battlefieldRef.current.getBoundingClientRect().y + battlefieldRef.current.offsetHeight,
    })
  }, [])

  return (
    <div className={classes.battlefield}>
      <div ref={battlefieldRef} size={battlefieldSize}>
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