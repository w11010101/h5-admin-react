import React, { useState, useEffect } from 'react';

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
import routers from './common/js/routers.js';
console.log('routers = ',routers);

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
    bottom: 0,
    background: '#595959',
};
styles.content = {
    ...styles.fill,
    top: "45px",
    textAlign: "center"
};
export default function App() {
    const [isShow, setIsShow] = useState(false);
    const [transitionName, setTransitionName] = useState('slide-in');
    function getIsShowState(data) {
        console.log('data = ', data);
        setIsShow(data.isShow);
        console.log(data.backClassNames)
        setTransitionName(data.backClassNames)
    }
    useEffect(() => {

    })
    function goPageControl() {
        setIsShow(true);
        setTransitionName('slide-in');
    }
    return (
        <div className="App">
            <Container maxWidth="sm" fixed className='container'>
                <Router>
                    <Header isShow={isShow} onChangeShowState={getIsShowState}/>
                </Router>
                <Box className='box' style={styles.content}>
                    
                    <Router>
                        {
                            routers.map((route,index)=>{
                                return <Button variant="contained" key={index} onClick={goPageControl}>
                                    <Link to={route.path}>{route.name}</Link>
                                </Button>
                            })
                        }
                        <ViewControl isShow={isShow} transitionName={transitionName} onChangeShowState={getIsShowState}/>
                    </Router>
                    {/*<Router>null</Router>*/}
                </Box>
            </Container>
        </div>
    );

}

// 

function ViewControl(props) {
    console.log(2,props.transitionName)
    return (
        <TransitionView transitionName={props.transitionName}>
            {
                routers.map((route,index)=>{
                    return <Route exact={true} key={index} path={route.pathName} component={route.component}/>
                })
            }
        </TransitionView>
    );

}


// Header
function Header(props) {

    let history = useHistory();
    let classes = useStyles();

    function goBack() {
        console.log('history.action = ',history.action);
        console.log('props = ', props);
        history.goBack();
        props.onChangeShowState({
            isShow:false,
            backClassNames:'slide-back'
        });

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