import React, { Component } from 'react';
export default function asyncComponents(importComponent) {
    class AsyncCompnent extends Component {
        constructor(props) {
            super(props);
            console.log(123,importComponent());
            this.state = {
                component: null
            }
        }

        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({
                component
            })
        }
        render(){
        	const C = this.state.component;
            // console.log('C = ',C)
        	return C?<C {...this.props}/>:null;
        }
    }
    return AsyncCompnent;
}