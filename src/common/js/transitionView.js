import React, { useState } from 'react';
import { Switch, useHistory, useLocation, useParams } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Slide, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
export default function TransitionView(props) {
    let history = useHistory(),
        location = useLocation(),
        prams = useParams();

    console.log('TransitionView props = ', props);
    // console.log('TransitionView prams = ', prams);
    let _default = {
        classNames: props.transitionName || "slide-fade",
        timeout: props.timeout || 300,
        isShow: props.isShow
    }
    // const [checked, setChecked] = React.useState(false);
    const show = true;
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
        },
        svg: {
            width: 100,
            height: 100,
        },
        polygon: {
            fill: theme.palette.common.white,
            stroke: theme.palette.divider,
            strokeWidth: 1,
        },
    }));
    console.log(_default.isShow)
    const classes = useStyles();
    return (
            <Slide direction="left" in={_default.isShow} mountOnEnter unmountOnExit>
                <Paper elevation={4} className={classes.paper}>
                    <Switch location={location}>
                        {props.children}
                    </Switch>
                </Paper>
            </Slide>
    );
}

