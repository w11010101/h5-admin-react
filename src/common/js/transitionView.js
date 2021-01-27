import React, { useState } from 'react';
import { Switch, useHistory, useLocation, useParams } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

    paper: {
        zIndex: 1,
        position: 'relative',
        margin: theme.spacing(1),
    }
}));

export default function TransitionView(props) {
    let history = useHistory();
    let location = useLocation();
    const [className, setClassNames] = useState('slide-in');
    const ANIMATION_MAP = {
        PUSH: 'slide-in',
        POP: 'slide-back'
    }
    // prams = useParams();
    console.log(3, 'history = ', history.action, history.location.pathname);
    // console.log(4, 'location = ', location);
    // console.log(5, 'location.key = ', location.key);
    console.log(6, 'props = ', props);
    // setClassNames(props.transitionName);
    let _default = {
        classNames: props.transitionName || "slide-in",
        timeout: props.timeout || 400,
        isShow: props.isShow || true
    }
    console.log(7, '_default = ', _default);
    const classes = useStyles();
    
    return (
        <TransitionGroup
            childFactory={child => React.cloneElement(
              child,
              {classNames: ANIMATION_MAP[history.action]}
            )}
            >
                <CSSTransition 
                    key={location.pathname} 
                    classNames={_default.classNames} 
                    timeout={_default.timeout}
                    // unmountOnExit
                    >
                    <Switch location={location} >
                        {props.children}
                    </Switch>
                </CSSTransition>
            
        </TransitionGroup>
    )
}