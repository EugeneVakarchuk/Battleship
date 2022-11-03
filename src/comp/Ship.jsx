import React, { useEffect, useRef, useState } from 'react';
import { Cell } from './Battlefield';
import classes from '../styles.module.css'
import useMousePosition from '../hooks/useMousePosition';


const Ship = ({ size, ...props }) => {

  const mousePos = useMousePosition();
  const shipRef = useRef();
  const [shipPos, setShipPos] = useState({
    x: null,
    y: null,
    xEnd: null,
    yEnd: null
  });
  const [startShipPos, setStartShipPos] = useState({
    x: null,
    y: null,
  });
  const [target, setTarget] = useState(false);
  const [drag, setDrag] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [dragStyles, setDragStyles] = useState({});


  useEffect(() => {
    setStartShipPos({
      x: shipRef.current.getBoundingClientRect().x,
      y: shipRef.current.getBoundingClientRect().y,
    })
  }, [])

  useEffect(() => {
    setShipPos({
      x: shipRef.current.getBoundingClientRect().x,
      y: shipRef.current.getBoundingClientRect().y,
      xEnd: shipRef.current.getBoundingClientRect().x + shipRef.current.offsetWidth,
      yEnd: shipRef.current.getBoundingClientRect().y + shipRef.current.offsetHeight,
    })

    if (
      (
        mousePos.x > shipPos.x &&
        mousePos.y > shipPos.y &&
        mousePos.x < shipPos.xEnd &&
        mousePos.y < shipPos.yEnd
      ) || drag === true
    ) {
      setTarget(true)
    } else {
      setTarget(false)
    }

    shipRef.current.addEventListener('mousedown', () => {
      setMouseDown(true)
    });

    shipRef.current.addEventListener('mouseup', () => {
      setMouseDown(false);
      setTarget(false);
      setDrag(false)
      setShipPos({
        x: startShipPos.x,
        y: startShipPos.y,
        xEnd: startShipPos.xEnd,
        yEnd: startShipPos.yEnd
      });
      setDragStyles({})
    })

    target === true &&
      mouseDown === true
      ? setDrag(true) &&
      setTarget(true)
      : setDrag(false)

    drag === true
      ? setDragStyles(Object.assign({}, dragStyles, {
        position: 'absolute',
        top: mousePos.y - shipRef.current.offsetHeight / 2,
        left: mousePos.x - shipRef.current.offsetWidth / 2
      })) &&
      setTarget(true) &&
      setShipPos({
        x: shipRef.current.getBoundingClientRect().x,
        y: shipRef.current.getBoundingClientRect().y,
        xEnd: shipRef.current.getBoundingClientRect().x + shipRef.current.offsetWidth,
        yEnd: shipRef.current.getBoundingClientRect().y + shipRef.current.offsetHeight,
      })
      : setDragStyles(Object.assign({}, dragStyles, {
        position: 'static'
      }))
  }, [mousePos, drag])


  const matrix = [];
  for (let i = 0; i < size; i++) {
    matrix.push(i);
  }


  return (
    <div style={dragStyles} className={classes.ship} ref={shipRef}>
      {
        matrix.map((cell, index) =>
          <Cell key={index} />
        )
      }
    </div>
  );

};


export default Ship;