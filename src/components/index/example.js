import React from 'react';
import Home from './home'
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const routes = [
  { path: '/home', name: 'Home',Component: Home},
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact },
];
// activeClassName="active"
export default function Example() {
  return (
    <Router >
        <div bg="light" className='example-div route-view'>

          <div className="mx-auto">
            {routes.map(route => (
              <Link
                key={route.path}
                as={NavLink}
                to={route.path}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact={true} path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="silde-in"
                  unmountOnExit
                >
                  <div className="example-page">
                    {Component?<Component />:<Redirect strict={true} to={{
                      pathname:path,
                      state:{
                        a:1
                      }
                    }}/>}
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
    </Router>
  )
}

function Contact() {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <p>
        Aliquam iaculis a nisi sed ornare. Sed venenatis tellus vel consequat
        congue. In bibendum vestibulum orci et feugiat.
      </p>
    </div>
  )
}
function About() {
  return (
    <div className='about'>
      <h1>About</h1>
      <p>
        Donec sit amet augue at enim sollicitudin porta. Praesent finibus ex
        velit, quis faucibus libero congue et. Quisque convallis eu nisl et
        congue. Vivamus eget augue quis ante malesuada ullamcorper. Sed orci
        nulla, eleifend eget dui faucibus, facilisis aliquet ante. Suspendisse
        sollicitudin nibh lacus, ut bibendum risus elementum a.
      </p>
    </div>
  )
}

// 
// 
