import React, { useEffect, useRef, useState } from 'react';
import { Cell } from './Battlefield';
import classes from '../styles.module.css'
import useMousePosition from '../hooks/useMousePosition';


const Ship = ({ size, ...props }) => {

  // Create ship pos

  const [shipPos, setShipPos] = useState({ x: null, y: null, xEnd: null, yEnd: null });
  const shipRef = useRef();

  useEffect(() => {

    const x = shipRef.current.getBoundingClientRect().x;
    const y = shipRef.current.getBoundingClientRect().y;
    const xEnd = shipRef.current.getBoundingClientRect().x + shipRef.current.offsetWidth;;
    const yEnd = shipRef.current.getBoundingClientRect().y + shipRef.current.offsetHeight;;

    return () => {
      setShipPos({
        x: x,
        y: y,
        xEnd: xEnd,
        yEnd: yEnd
      })
    };
  }, []);


  // Create target state

  const mousePos = useMousePosition();
  const [target, setTarget] = useState(false);

  useEffect(() => {
    return () => {
      if (
        mousePos.x > shipPos.x &&
        mousePos.y > shipPos.y &&
        mousePos.x < shipPos.xEnd &&
        mousePos.y < shipPos.yEnd
      ) {
        setTarget(true)
      } else {
        setTarget(false)
      }
    };
  });

  // Create drag state
  const [shipDrag, setShipDrag] = useState(false);

  useEffect(() => {

    const mouseDonw = shipRef.current.addEventListener('mousedown', () => {
      if (
        target === true
      ) {
        setShipDrag(true);
      } else {
        setShipDrag(false);
      }
    });

    const mouseUp = shipRef.current.addEventListener('mouseup', () => {
      if (
        target === false
      ) {
        setShipDrag(false);
      }
    })
  })

  const [dragStyles, setDragStyles] = useState({});

  const isDrag = () => {
    if (shipDrag === true) {
      setDragStyles(Object.assign({}, dragStyles, {
        position: 'absolute',
        top: mousePos.y - shipRef.current.offsetHeight / 2,
        left: mousePos.x - shipRef.current.offsetWidth / 2
      }))
    }
  }

  useEffect(() => {
    isDrag();
  })


  // create matrix and render

  const matrix = [];
  for (let i = 0; i < size; i++) {
    matrix.push(i);
  }


  return (
    <div pos={shipPos} ref={shipRef} style={dragStyles} className={classes.ship}>
      {
        matrix.map((cell, index) =>
          <Cell key={index} />
        )
      }
    </div>
  );

};


export default Ship;