import React, { useState } from 'react';
import { Switch, useHistory, useLocation, useParams } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
export default function TransitionView(props) {
    let history = useHistory(),
        location = useLocation(),
        prams = useParams();

    console.log('TransitionView props = ', props);
    let _default = {
        classNames: props.transitionName || "slide-fade",
        timeout: props.timeout || 300
    }
    // const [show, setShow] = useState(true);
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

    return (
        <div>
        
            {/*<CSSTransition in={show} key={location.key} classNames="my-node" timeout={_default.timeout} >
                <Switch location={location}>
                    {props.children}
                </Switch>
            </CSSTransition>*/}
            <Slide direction="up" in={show}>
                <Paper elevation={4} className={classes.paper}>
                    <Switch location={location}>
                        {props.children}
                    </Switch>
                </Paper>
            </Slide>
        </div>
        
    );
}