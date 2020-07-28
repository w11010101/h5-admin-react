import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';

export default function Router(props) {
    let NODE_ENV = process.env.NODE_ENV == 'development';
    return (
        <div >
			{ NODE_ENV ? <BrowserRouter>{props.children}</BrowserRouter> : <HashRouter>{props.children}</HashRouter> }
		</div>
    )
}