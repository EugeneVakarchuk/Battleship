import './App.css';
import Battlefield from './comp/Battlefield';
import Menu from './comp/Menu';
import classes from './styles.module.css';


function App() {




  return (
    <div className="App">
      <div className={classes.header}>
        <h1 className={classes.headerTitle}>Welcome to the Battleship
        </h1>
      </div>
      <section className={classes.mainSection}>
        <Battlefield />
        <Menu />
        <Battlefield />
      </section>

    </div>
  );
}

export default App;
