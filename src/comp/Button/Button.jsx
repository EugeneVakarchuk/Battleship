import React from 'react';
import classes from './style.module.css'

const Button = ({ children, ...props }) => {
  return (
    <button disabled={props.disabled} className={classes.btn}>{children}</button>
  );
};
export default Button;