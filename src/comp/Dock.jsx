import React from 'react';
import Ship from './Ship';
import classes from '../styles.module.css'

const Dock = () => {
  return (
    <div className={classes.dock}>
      <div className={classes.dockBlock}>
        <Ship size={4} />
        <Ship size={3} />
      </div>
      <div className={classes.dockBlock}>
        <Ship size={3} />
        <Ship size={2} />
        <Ship size={2} />
      </div>
      <div className={classes.dockBlock}>
        <Ship size={2} />
        <Ship size={1} />
        <Ship size={1} />
        <Ship size={1} />
        <Ship size={1} />
      </div>
    </div>
  );
};

export default Dock;