import asyncComponents from './asyncComponents.js';
const Home = asyncComponents(()=>import('../../components/example/home.js'));
const Page = asyncComponents(()=>import('../../components/example/page.js'));
const Amination = asyncComponents(()=>import('../../components/example/amination.js'));
const Example = asyncComponents(()=>import('../../components/example/example.js'));

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