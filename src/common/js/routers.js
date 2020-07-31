import Home from '../../components/index/home.js';
import Page from '../../components/index/page.js';
import Example from '../../components/index/example.js';
import Amination from '../../amination.js';

var routers = [{
        pathName: '/home',
        path: '/home',
        name: 'home',
        component: Home,
        meta: {

        }
    },
    {
        pathName: '/page',
        path: '/page',
        name: 'page',
        component: Page,
        meta: {

        }
    },
    {
        pathName: '/example',
        path: '/example',
        name: 'example',
        component: Example,
        meta: {

        }
    },
    {
        pathName: '/amination',
        path: '/amination',
        name: 'amination',
        component: Amination,
        meta: {

        }
    },
];

export default routers;