import React, { useEffect, useRef, useState } from 'react';
import { Cell } from './Battlefield';
import classes from '../styles.module.css'
import useMousePosition from '../hooks/useMousePosition';


const Ship = ({ size, dockPos, ...props }) => {

  const [shipPos, setShipPos] = useState({ x: null, y: null });
  const shipRef = useRef();

  useEffect(() => {
    const x = dockPos.x + shipRef.current.getBoundingClientRect().x;
    const y = dockPos.y + shipRef.current.getBoundingClientRect().y;

    return () => {
      setShipPos({
        x: x,
        y: y
      })
    };
  }, []);

  console.log(shipPos)


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