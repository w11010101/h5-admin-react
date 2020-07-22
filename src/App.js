import React from 'react';
import logo from './logo.svg';

import './App.css';

import { BrowserRouter as Router, Switch, Route, Link, useHistory, useLocation, useParams } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Button, Box, AppBar, Toolbar, Typography, Container, Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ArrowBackIos, Menu as MenuIcon } from '@material-ui/icons';

import Home from './components/index/home.js'
import Page from './components/index/page.js'
import Amination from './amination.js';

// const history = require("history");

const styles = {};
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: '#fff',
        color: '#595959',
        boxShadow: 'none',
        borderBottom: '1px solid #595959'
    },
    header: {
        minHeight: '45px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

}));
styles.fill = {
    position: "absolute",
    left: 0,
    right: 0,
    top: '45px',
    bottom: 0
};
styles.content = {
    ...styles.fill,
    top: "45px",
    textAlign: "center"
};

export default function App() {

    return (
        <div className="App">
            <Container maxWidth="sm" fixed className='container'>
                <Router>
                    <Nav></Nav>
                </Router>
                <Box className='box' style={styles.content}>
                    <Router>
                        <Route>
                            <ViewTransition></ViewTransition>
                        </Route>
                    </Router>
                </Box>
            </Container>
        </div>
    );

}

function ViewTransition() {

    let history3 = useHistory();
    console.log('history3 = ', history3);
    let location = useLocation();

    return (
        <div>
            <div>
                <Button variant="contained"><Link to="/Home">to Home</Link></Button>
                <Button variant="contained"><Link to="/page/123123">to Page</Link></Button>
                <Button variant="contained"><Link to="/amination">to amination</Link></Button>

            </div>
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={300} >
                    <Switch location={location} >
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route path="/page/:abc">
                            <Page />
                        </Route>
                        <Route path="/amination">
                            <Amination />
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

function Nav() {
    let history = useHistory();
    console.log('history = ', history);
    let classes = useStyles();

    function goBack() {
        history.goBack();
    }
    return (
        <AppBar className={classes.root} >
            <Toolbar className={classes.header}>
                <Grid container direction="row" justify="space-between" alignItems="flex-start" >
                    <Grid item xs={1}>
                        <ArrowBackIos fontSize="small" onClick={goBack} />
                    </Grid>
                    <Grid item xs={5}>
                       <Typography className={classes.title}>header</Typography>
                    </Grid>
                    <Grid item xs={1}>
                       
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>

    )
}

