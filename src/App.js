import React, { useState, useEffect } from 'react';

import './App.css';

// import { BrowserRouter as Router, Switch, Route, Link, useHistory, useLocation, useParams, matchPath } from "react-router-dom";
// import { BrowserRouter as Router, HashRouter, Route, Link, useHistory, matchPath } from "react-router-dom";
import { Route, Link, useHistory, matchPath } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Button, Box, AppBar, Toolbar, Typography, Container, Grid, IconButton } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { ArrowBackIos, Menu as MenuIcon } from '@material-ui/icons';
// 
import TransitionView from './common/js/transitionView.js'
import RouterBox from './common/js/routerBox.js';
import routers from './common/js/routers.js';
// components
import asyncComponents from './common/js/asyncComponents.js';
// import './common/js/antdComponents.js'

const Home = asyncComponents(()=>import('./components/example/home.js'));
const Page = asyncComponents(()=>import('./components/example/page.js'));
const Amination = asyncComponents(()=>import('./components/example/amination.js'));
const Example = asyncComponents(()=>import('./components/example/example.js'));

const match = matchPath("/page/123", {
    path: "/page/:id",
    exact: true,
    strict: false
});

const styles = {
    root: {
        'flex-grow': 1,
        'background': '#fff',
        'color': '#595959',
        'box-shadow': 'none',
        'border-bottom': '1px solid #595959'
    },
    header: {
        'min-height': '45px'
    },

    title: {
        'flex-grow': 1,
    }

};
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
                <RouterBox>
                    <Header isShow={isShow} onChangeShowState={getIsShowState}/>
                </RouterBox>
                <Box className='box' style={styles.content}>
                    <RouterBox>
                        {
                            routers.map((route,index)=>{
                                return <Button variant="contained" key={index} onClick={goPageControl}>
                                    <Link to={route.path}>{route.name}</Link>
                                </Button>
                            })
                        }
                        <ViewControl isShow={isShow} transitionName={transitionName} onChangeShowState={getIsShowState}/>
                    </RouterBox>
                </Box>
            </Container>
        </div>
    );
}

// 渲染视图控制器
function ViewControl(props) {
    console.log(2,props.transitionName)
    return (
        <TransitionView transitionName={props.transitionName} >
            {
                routers.map((route,index)=>{
                    return <Route  key={index} path={route.pathName} component={route.component}/>
                })
            }
        </TransitionView>
    );
}


// Header
function Header(props) {

    let history = useHistory();

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
        <AppBar style={styles.root} >
            <Toolbar style={styles.header}>
                <Grid container direction="row" justify="space-between" alignItems="flex-start" >
                    <Grid item xs={1}>
                        {/*<ArrowBackIos fontSize="small" onClick={goBack} />*/}
                    </Grid>
                    <Grid item xs={5}>
                       <Typography style={styles.title}>header</Typography>
                    </Grid>
                    <Grid item xs={1}>
                       
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}