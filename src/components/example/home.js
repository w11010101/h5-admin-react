import React from 'react';

import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

import TransitionView from '../../common/js/transitionView.js'
// import RouterBox from '../../common/js/routerBox.js';

export default function Home(props) {
    let histroy = useHistory();
    // const [isShow, setIsShow] = useState(false);
    // function getIsShowState(state) {
    //     setIsShow(state);
    //     console.log('state = ', state);
    // }
    function toPage() {
        console.log('to page')
        histroy.push({
            pathname: '/home-child',
            state: { fromDashboard: true }
        })
        // setIsShow(true);
    }

    function goBack() {
        histroy.goBack();
    }

    return (
        <div className='home route-view'>
            <div>this is Home.js</div>
            <Router>
                <div>
                    <button onClick={toPage}>to page-child</button>
                    <button onClick={goBack}>back</button>
                </div>
                <img src={require('../../assets/2.jpeg')} alt=""/>  
                <div className="container">
                    {/*<TransitionView transitionName='slide-in' class='abcdef'>*/}
                        <Route exact={true} path='/home-child' >
                            <HomeChild name='page-child-name'/>
                        </Route>
                    {/*</TransitionView>*/}
                </div>  
            </Router>
        </div>
    );
}

function HomeChild(props) {
    console.log('props = ', props);
    return (
        <div>
            this is HomeChild ;  {props.name}
        </div>
    )
}