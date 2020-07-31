import React from 'react';
// import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
// import Router from '../../common/js/routerBox.js';
// import { Container, Navbar, Nav } from 'react-bootstrap'
// import Home from './pages/home'
// import About from './pages/about'
// import Contact from './pages/contact'


const routes = [
  { path: '/home', name: 'Home', Component: Home },
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
                
                exact={true}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="silde-in"
                  unmountOnExit
                >
                  <div className="example-page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
    </Router>
  )
}
function Home() {
  return (
    <div className='home'>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet,
        purus vitae eleifend tristique, lorem magna volutpat orci, et vehicula
        erat erat nec elit. Aenean posuere nunc ac cursus facilisis. Aenean vel
        porta turpis, ut iaculis justo.
      </p>
    </div>
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
