import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';

import './App.css';

// import { BrowserRouter as Router, Switch, Route, Link, useHistory, useLocation, useParams, matchPath } from "react-router-dom";
import { BrowserRouter as Router, HashRouter, Route, Link, useHistory, matchPath } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Button, Box, AppBar, Toolbar, Typography, Container, Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ArrowBackIos, Menu as MenuIcon } from '@material-ui/icons';


import Home from './components/index/home.js'
import Page from './components/index/page.js'
import Amination from './amination.js';

import TransitionView from './common/js/transitionView.js'
// import Router from './common/js/routerBox.js';

import Example from './components/index/example.js'

const match = matchPath("/page/123", {
    path: "/page/:id",
    exact: false,
    strict: false
});


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
    }

}));

const styles = {};
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
    const [isShow, setIsShow] = useState(false);

    function getIsShowState(state) {
        setIsShow(state);
        console.log('state = ', state);
    }
    useEffect(() => {

    })
    return (
        <div className="App">
            <Container maxWidth="sm" fixed className='container'>
                <Router>
                    <Header isShow={isShow} onChangeShowState={getIsShowState}/>
                </Router>
                <Box className='box' style={styles.content}>
                    <Router>
                        <Route>
                            <ViewControl isShow={isShow} onChangeShowState={getIsShowState}/>
                        </Route>
                    </Router>
                    {/*<Router>null</Router>*/}
                </Box>
            </Container>
        </div>
    );

}
const routes = {
    home: {
        pathname: '/home',
        state: {
            fromDashboard: true
        },
        meta: {
            pageName: 'home',
            title: 'to home'
        }
    },
    page: {
        pathname: '/page',
        state: {
            fromDashboard: true
        },
        meta: {
            pageName: 'page',
            title: 'to page'
        }
    },
    amination: {
        pathname: '/amination',
        state: {
            fromDashboard: true
        },
        meta: {
            pageName: 'amination',
            title: 'to amination'
        }
    },
}
// 

function ViewControl(props) {

    function goPageControl() {
        console.log(1, 'props = ', props);
        props.onChangeShowState(true);
    }

    return (
        <div>

            <div>
                <Button variant="contained" onClick={goPageControl}><Link to={routes.home}>to Home</Link></Button>
                <Button variant="contained" onClick={goPageControl}><Link to={match.url}>to Page</Link></Button>
                <Button variant="contained" onClick={goPageControl}><Link to="/example">to Example</Link></Button>
            </div>
            
            <TransitionView transitionName='slide-fade'>
                <Route exact path={routes.home.pathname} >
                    <Home />
                </Route>
                <Route path={match.path}>
                    <Page />
                </Route>
                <Route path="/example">
                    <Example />
                </Route>
            </TransitionView>

            {/*<TransitionView isShow={props.isShow}>
                <Route exact path={routes.home.pathname}>
                    <Home />
                </Route>
                <Route path={match.path}>
                    <Page />
                </Route>
                <Route path="/amination">
                    <Amination />
                </Route>
            </TransitionView>*/}
        </div>
    );

}


// Header
function Header(props) {

    let history = useHistory();
    let classes = useStyles();

    function goBack() {
        console.log('props = ', props);
        history.goBack();
        // props.onChangeShowState(false);

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