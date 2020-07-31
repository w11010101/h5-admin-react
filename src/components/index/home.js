import React from 'react';

import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

import TransitionView from '../../common/js/transitionView.js'
// import Router from '../../common/js/routerBox.js';
// export default Home;
export default function Home (props){
	let histroy = useHistory();
    // const [isShow, setIsShow] = useState(false);
    // function getIsShowState(state) {
    //     setIsShow(state);
    //     console.log('state = ', state);
    // }
    function toPage(){
        histroy.push({
            pathname: '/home/home-child',
            state: { fromDashboard: true }
        })
        // setIsShow(true);
        
    }
    function goBack(){
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
            	{/*<TransitionView >
            		<Route path='/home-child'>
            			<HomeChild name='page-child-name'/>
            		</Route>
        		</TransitionView>*/}
            </Router>
        </div>
    );
}

function HomeChild(props){
	return (
		<div>
			this is HomeChild {props.name}
		</div>
		)
}