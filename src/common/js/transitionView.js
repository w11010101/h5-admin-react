import React from 'react';
import { Switch, Link, useHistory, useLocation, useParams } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
export default function TransitionView(props) {
    let history = useHistory(),
        location = useLocation(),
        prams = useParams();

    console.log('TransitionView props = ', props);
    let _default = {
        classNames: props.transitionName || "slide-fade",
        timeout: props.timeout || 300
    }
    return (
        <TransitionGroup>
			<CSSTransition key={location.key} classNames={_default.classNames} timeout={_default.timeout} >
				<Switch location={location}>
					{props.children}
				</Switch>
			</CSSTransition>
		</TransitionGroup>
    );
}