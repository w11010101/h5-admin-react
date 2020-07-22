import React from 'react';

// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.pageView = React.createRef();
//     }

//     render() {
//         return (<div className='route-view'  ref={this.pageView}>
//                     this is page.js
//                 </div>);
//     }
// }

// export default Page;
export default function Page (props){

    return (
            <div className='route-view'  >
                 this is page.js
            </div>
        )
}