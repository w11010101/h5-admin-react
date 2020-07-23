import React from 'react';

import { BrowserRouter as Router, Route, Link, useHistory, useLocation, useParams } from "react-router-dom";

import TransitionView from '../../common/js/transitionView.js'

// export default Page;
export default function Page(props) {
    let params = useParams();
    console.log(params)
    return (
        <div className='route-view' >
            this is page.js
            <Router>
            	
            	<div>
            		<Link to="/page-child/123123">to page-child</Link>
            	</div>
            	
            	<TransitionView transitionName='slide-fade'>
            		<Route path='/page-child/:num'>
            			<PageChild name='page-child-name'/>
            		</Route>
        		</TransitionView>
            </Router>
        </div>
    )
}
function PageChild(props) {
    console.log(props);

    let params = useParams();
    let location = useLocation();

    return (
        <div className='route-view'>
			this is page-child
			<div>{props.name}</div>
		</div>
    )
}


