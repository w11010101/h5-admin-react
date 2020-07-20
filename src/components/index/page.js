import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
				this is page.js
			</div>
        )
    }
}

export default Page;