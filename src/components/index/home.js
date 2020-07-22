import React from 'react';
import '../../common/css/home.css';
// class Home extends React.Component {
//     constructor(props) {
//         super(props);
//         this.homeView = React.createRef();
//     }

//     render() {
//         return (<div className='route-view home' ref={this.homeView}>
//         			this is home.js
//         		</div>);
//     }
// }

// export default Home;
export default function Home (props){

    return (
            <div className='route-view'  >
            	<div>this is Home.js</div>
                 
            </div>
        );
}