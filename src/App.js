import React from 'react';
// import logo from './logo.svg';

import './App.css';

// import { BrowserRouter as Router, Switch, Route, Link, useHistory, useLocation, useParams, matchPath } from "react-router-dom";
import { BrowserRouter, HashRouter, Route, Link, useHistory, matchPath } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Button, Box, AppBar, Toolbar, Typography, Container, Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ArrowBackIos, Menu as MenuIcon } from '@material-ui/icons';

// import { matchRoutes, renderRoutes } from "react-router-config";

import Home from './components/index/home.js'
import Page from './components/index/page.js'
import Amination from './amination.js';

import TransitionView from './common/js/transitionView.js'
import Router from './common/js/routerBox.js'

console.log(123)
const match = matchPath("/page/123", {
    path: "/page/:id",
    exact: false,
    strict: false
});
// console.log('matchRoutes = ', matchRoutes);

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

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isShow:false
        }
    }
    getIsShowState(state){
        this.setState({
            isShow:state
        })
    }
    render(){


        return (
            <div className="App">
                <Container maxWidth="sm" fixed className='container'>
                    <Router>
                        <Header isShow={this.state.isShow}/>
                    </Router>
                    <Box className='box' style={styles.content}>
                        <Router>
                            <Route>
                                <ViewControl/>
                            </Route>
                        </Router>
                        {/*<Router>null</Router>*/}
                    </Box>
                </Container>
            </div>
        );
    }
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

class ViewControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isShow: false };
        this.goPageControl = this.goPageControl.bind(this);

    }

    goPageControl() {
        this.setState({
            isShow: true
        })
    }

    render() {
        return (
            <div>
                <div>
                {
                    // Object.keys(routes).map((item,index)=>{
                    //     let event = routes[item];
                    //     console.log('event = ',event);
                    //     return <Button variant="contained" key={index} onClick={this.goPageControl}><Link to={event}>{event.meta.title}</Link></Button>
                    // })
                }

                <Button variant="contained" onClick={this.goPageControl}><Link to={routes.home}>to Home</Link></Button>
                <Button variant="contained" onClick={this.goPageControl}><Link to={match.url}>to Page</Link></Button>
                <Button variant="contained" onClick={this.goPageControl}><Link to="/amination">to amination</Link></Button>
                </div>
                <TransitionView transitionName='slide-fade' isShow={this.state.isShow}>
                    <Route exact path={routes.home.pathname}>
                        <Home />
                    </Route>
                    <Route path={match.path}>
                        <Page />
                    </Route>
                    <Route path="/amination">
                        <Amination />
                    </Route>
                </TransitionView>
                
            </div>
        );
    }
}
// Header
// function Header(props) {
//     let history = useHistory();
//     let classes = useStyles();

//     function goBack() {
//         // history.goBack();
//         console.log(this)
//         console.log(props)
//         // this.setState({
//         //     isShow:false
//         // })
//     }
//     return (
//         <AppBar className={classes.root} >
//             <Toolbar className={classes.header}>
//                 <Grid container direction="row" justify="space-between" alignItems="flex-start" >
//                     <Grid item xs={1}>
//                         <ArrowBackIos fontSize="small" onClick={goBack} />
//                     </Grid>
//                     <Grid item xs={5}>
//                        <Typography className={classes.title}>header</Typography>
//                     </Grid>
//                     <Grid item xs={1}>
                       
//                     </Grid>
//                 </Grid>
//             </Toolbar>
//         </AppBar>

//     )
// }

class Header extends React.Component {
    constructor(props) {
        super(props);
        let classes = useStyles();
        console.log(classes)
        this.state = {
            classes:{}
        }
    }


    goBack() {
        let history = useHistory();
        history.goBack();
        console.log(this.props.getIsShowState)
    }
    render() {
        return (
            <AppBar className={this.state.classes.root} >
                <Toolbar className={this.state.classes.header}>
                    <Grid container direction="row" justify="space-between" alignItems="flex-start" >
                        <Grid item xs={1}>
                            <ArrowBackIos fontSize="small" onClick={this.goBack} />
                        </Grid>
                        <Grid item xs={5}>
                           <Typography className={this.state.classes.title}>header</Typography>
                        </Grid>
                        <Grid item xs={1}>
                           
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

        )
    }
}