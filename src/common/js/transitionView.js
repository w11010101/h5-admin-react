import React, { useState } from 'react';
import { Switch, useHistory, useLocation, useParams } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// npm install @types/react-transition-group
// import { Slide, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    paper: {
        zIndex: 1,
        position: 'relative',
        margin: theme.spacing(1),
    }
}));

export default function TransitionView(props) {
    let history = useHistory(),
        location = useLocation(),
        prams = useParams();

    let _default = {
        classNames: props.transitionName || "slide-fade",
        timeout: props.timeout || 300,
        isShow: props.isShow ||true
    }

    const classes = useStyles();

    // in={toggleShow}
    //     timeout={1000}
    //     unmountOnExit
    return (
        <TransitionGroup >
            <CSSTransition 
                key={location.key} 
                classNames={_default.classNames} 
                timeout={_default.timeout}
                unmountOnExit>
                <Switch location={location} >
                    {props.children}
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
}

// export default function TransitionView(props) {
//     let history = useHistory(),
//         location = useLocation(),
//         prams = useParams();

//     let _default = {
//         classNames: props.transitionName || "slide-fade",
//         timeout: props.timeout || 300,
//         isShow: props.isShow
//     }

//     const classes = useStyles();
//     return (
//         <Slide  direction="left" className='router-box' in={_default.isShow} mountOnEnter unmountOnExit>
//             <Paper elevation={4} className={classes.paper}>
//                 <Switch location={location} >
//                     {props.children}
//                 </Switch>
//             </Paper>
//         </Slide>
//     );
// }

