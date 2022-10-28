import React, { useEffect, useRef, useState } from 'react';
import { Cell } from './Battlefield';
import classes from '../styles.module.css'
import useMousePosition from '../hooks/useMousePosition';


const Ship = ({ size, dockPos, ...props }) => {

  const [shipPos, setShipPos] = useState({ x: null, y: null, xEnd: null, yEnd: null });
  const shipRef = useRef();

  useEffect(() => {
    const absShipX = shipRef.current.getBoundingClientRect().x;
    const absShipY = shipRef.current.getBoundingClientRect().y;

    const x = dockPos.x - absShipX;
    const y = dockPos.y - absShipY;

    return () => {
      setShipPos({
        x: x,
        y: y
      })
    };
  }, []);





  //  const mousePos = useMousePosition();
  //
  //  const [target, setTarget] = useState(false);
  //
  //  useEffect(() => {
  //    return () => {
  //      if (mousePos.x === shipPos.x && mousePos.y === shipPos.y) {
  //        setTarget(true)
  //      } else (setTarget(false))
  //    };
  //  });


  const matrix = [];
  for (let i = 0; i < size; i++) {
    matrix.push(i);
  }


  return (
    <div pos={shipPos} ref={shipRef} className={classes.ship}>
      {
        matrix.map((cell, index) =>
          <Cell key={index} />
        )
      }
    </div>
  );

};


export default Ship;