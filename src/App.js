import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import PkGrid from './pages/Grid/PkGrid';
import PkDetails from './pages/Details/PkDetails';

class App extends Component 
{
  render() 
  {
    return (
      <div className={styles.app}>
      <AppBar position="static">
          <Toolbar>
            <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={styles.grow}>
              Pokemons
            </Typography>                    
          </Toolbar>
        </AppBar>
        <Route path="/" exact component={PkGrid} />      
        <Route path="/details/:id" component={PkDetails} />
      </div>
    );
  }
}

export default App;

