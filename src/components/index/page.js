import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Link, useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { Button } from '@material-ui/core';
import TransitionView from '../../common/js/transitionView.js'
// import Router from '../../common/js/routerBox.js'
// export default Page;
export default function Page(props) {
    let params = useParams();
    // let histroy = useHistory();
    let { path, url } = useRouteMatch();
    // const [isShow, setIsShow] = useState(false);

    // function getIsShowState(state) {
    //     // setIsShow(state);
    //     console.log('state = ', state);
    // }
    // function toPage(){
    //     histroy.push({
    //         pathname: `${url}/page-child`,
    //         state: { fromDashboard: true }
    //     })
    //     setIsShow(true);
    //     // let routeMatch = useRouteMatch();
    //     console.log(path, url)
    // }
  

    return (
        <div className='page route-view' >
            this is page.js
            <Router>
                <div>
                    <Button variant="contained" >
                        <Link to={`${url}/page-child/123`}>to /page-child</Link>
                    </Button>
                </div>
                <img src={require('../../assets/1.jpeg')} alt=""/>  
                {/*<TransitionView>
                    <Route exact path={`${path}/page-child/:num`}>
                        <PageChild name='page-child-name'/>
                    </Route>
                </TransitionView>*/}
               {/* <TransitionView isShow={isShow}>
                    <Route path={`${path}/page-child/:num`}>
                        <PageChild name='page-child-name'/>
                    </Route>
                </TransitionView>*/}
            </Router>
        </div>
    );
}

function PageChild(props) {
    // console.log(props);

    let params = useParams();
    let location = useLocation();

    return (
        <div className='page-child route-view'>
            this is page-child:{params.num}
            <div>{props.name}</div>
        </div>
    )
}