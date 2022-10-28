import React, { useEffect, useRef, useState } from 'react';
import Ship from './Ship';
import classes from '../styles.module.css'

const Dock = () => {


  const [dockPos, setDockPos] = useState({ x: null, y: null });
  const dockRef = useRef();

  useEffect(() => {
    const x = dockRef.current.getBoundingClientRect().x;
    const y = dockRef.current.getBoundingClientRect().y;

    return () => {
      setDockPos({
        x: x,
        y: y
      })
    };
  }, []);


  console.log(dockPos)

  return (
    <div ref={dockRef} className={classes.dock}>
      <div className={classes.dockBlock}>
        <Ship dockPos={dockPos} size={4} />
        <Ship dockPos={dockPos} size={3} />
      </div>
      <div className={classes.dockBlock}>
        <Ship dockPos={dockPos} size={3} />
        <Ship dockPos={dockPos} size={2} />
        <Ship dockPos={dockPos} size={2} />
      </div>
      <div className={classes.dockBlock}>
        <Ship dockPos={dockPos} size={2} />
        <Ship dockPos={dockPos} size={1} />
        <Ship dockPos={dockPos} size={1} />
        <Ship dockPos={dockPos} size={1} />
        <Ship dockPos={dockPos} size={1} />
      </div>
    </div>
  );
};

export default Dock;