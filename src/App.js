import React from 'react';
import logo from './logo.svg';

import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
    Button,
    Box,
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid
} from '@material-ui/core';

import { ArrowBackIos } from '@material-ui/icons';

import Home from './components/index/home.js'
import Page from './components/index/page.js'
console.log(Page);

function App() {
    return (
        <div className="App">
            <Container maxWidth="sm" fixed className='container'>
                <AppBar className='header' >
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="flex-start"
                    >
                        <Grid item xs={2}>
                            <ArrowBackIos fontSize="small"/>
                        </Grid>
                        <Grid item xs={5}>
                           <Typography className='header-name'>header</Typography>
                        </Grid>
                        <Grid item xs={2}>
                           
                        </Grid>
                    </Grid>
                </AppBar>
                <Router>
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
                </Router>
            </Container>
        </div>
    );
}

export default App;