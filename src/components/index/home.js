import React from 'react';
import '../../common/css/home.css';
class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (<div className='route-view home'>
			this is home.js
		</div>)
    }
}

export default Home;