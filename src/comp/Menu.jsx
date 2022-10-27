import React from 'react';
import classes from '../styles.module.css'


const Button = ({ children, ...props }) => {
  return (
    <button disabled={props.disabled} className={classes.btn}>{children}</button>
  );
};

const Menu = () => {
  return (
    <div className={classes.menu}>
      <Button disabled={true}>Играть против легкого бота</Button>
      <Button disabled={true}>Играть против среднего бота</Button>
      <Button disabled={true}>Играть против сильного бота</Button>
      <Button disabled={true}>Играть против случайного игрока</Button>
      <Button disabled={true}>Вызвать на бой</Button>
      <Button>Расставить корабли вручную</Button>
      <Button>Расставить корабли случайно</Button>
    </div>
  );
};

export default Menu;