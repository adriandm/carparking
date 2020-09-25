import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contacto from '../pages/Contacto';
import Ubicacion from '../pages/Ubicacion';
import Login from '../pages/Login';
import Reserva from '../pages/Reserva';
import Index from '../pages/Index';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import DriveEtaIcon from '@material-ui/icons/DriveEta';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeadMenu() {
  const classes = useStyles();

  return (
          <Router>
              <AppBar position="static" style={{ backgroundColor: '#4d4948' }}>
                <Toolbar>
                    <div>
                      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <DriveEtaIcon /> <div class="menu-titulo">CARPARKING Aeropuerto</div>
                      </IconButton>
                      
                      <Link
                          to="/"
                            className="head-link"
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/ubicacion"
                            className="head-link"
                        >
                            Ubicación
                        </Link>
                        <Link
                            to="/login"
                            className="head-link"
                        >
                            Mi Reservación
                        </Link>
                        <Link
                            to="/contacto"
                            className="head-link"
                        >
                            Contacto
                        </Link>
                    </div>
                </Toolbar>
              </AppBar>
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/" exact>
                  <Index/>
                </Route>
                <Route path="/ubicacion">
                  <Ubicacion />
                </Route>
                <Route path="/contacto">
                  <Contacto />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/reserva">
                  <Reserva />
                </Route>
              </Switch>
          </Router>    
  );
}
