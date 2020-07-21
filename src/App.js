import React from 'react';
import logo from './logo.svg';

import './App.css';

import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Button, Box, AppBar, Toolbar, Typography, Container, Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ArrowBackIos, Menu as MenuIcon } from '@material-ui/icons';

import Home from './components/index/home.js'
import Page from './components/index/page.js'

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
function App() {
    console.log(useLocation);

    let location = useLocation();
    let classes = useStyles();

    function activateLasers() {
        console.log(Router);
    }

    return (
        <div className="App">
            <Container maxWidth="sm" fixed className='container'>
                <AppBar className={classes.root} >
                    <Toolbar className={classes.header}>
                        <Grid container direction="row" justify="space-between" alignItems="flex-start" >
                            <Grid item xs={1}>
                                <ArrowBackIos fontSize="small" onClick={activateLasers} />
                            </Grid>
                            <Grid item xs={5}>
                               <Typography className={classes.title}>header</Typography>
                            </Grid>
                            <Grid item xs={1}>
                               
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Box className='box' style={styles.content}>
                    <Router>
                        <div>
                            <Button variant="contained"><Link to="/Home">to Home</Link></Button>
                            <Button variant="contained"><Link to="/page/123123">to Page</Link></Button>
                        </div>
                        <TransitionGroup>
                            <CSSTransition  classNames="fade" timeout={300} >
                                <Switch >
                                    <Route exact path="/home">
                                        <Home />
                                    </Route>
                                    <Route path="/page/:abc">
                                        <Page />
                                    </Route>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </Router>
                    { /*<Router>
                        <div>
                            <div>
                                <Button variant="contained"><Link to="/Home">to Home</Link></Button>
                                <Button variant="contained"><Link to="/page/123123">to Page</Link></Button>
                            </div>
                            
                            <Switch >
                                <Route exact path="/home">
                                    <Home />
                                </Route>
                                <Route path="/page/:abc">
                                    <Page />
                                </Route>
                            </Switch>
                        </div>
                    </Router>*/ }
                </Box>
            </Container>
        </div>
    );

}

export default App;