import React, { useState } from 'react';
import { Switch, useHistory, useLocation, useParams } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Slide, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
export default function TransitionView(props) {
    let history = useHistory(),
        location = useLocation(),
        prams = useParams();

    let _default = {
        classNames: props.transitionName || "slide-fade",
        timeout: props.timeout || 300,
        isShow: props.isShow
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            height: 180,
        },
        wrapper: {
            width: 100 + theme.spacing(2),
        },
        paper: {
            zIndex: 1,
            position: 'relative',
            margin: theme.spacing(1),
        }
    }));
    const classes = useStyles();
    return (
        <Slide direction="left" className='router-box' in={_default.isShow} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
                <Switch location={location} >
                    {props.children}
                </Switch>
            </Paper>
        </Slide>
    );
}

