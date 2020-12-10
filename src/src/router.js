const Home = () => import('./pages/Home.vue')
const Page1 = () => import('./pages/Page1.vue')
const Page2 = () => import('./pages/Page2.vue')
const Page3 = () => import('./pages/Page3.vue')
const Page4 = () => import('./pages/Page4.vue')
const About = () => import('./pages/About.vue')
// import Header from './components/Header.vue'

const routers = [
    {
        path: '/',
        component: Home,
        meta:{
            title:'Home',
            index:0
        }
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta:{
            title:'Home',
            index:0
        }
    },
    {
        path: '/p1',
        name: 'page1',
        component: Page1,
        meta:{
            title:'Introduction',
            index:1
        }
    },
    {
        path: '/p2',
        name: 'page2',
        component: Page2,
        meta:{
            title:'Introduction',
            index:1
        }
    },
    {
        path: '/p3',
        name: 'page3',
        component: Page3,
        meta:{
            title:'Introduction',
            index:1
        }
    },
    {
        path: '/p4',
        name: 'page4',
        component: Page4,
        meta:{
            title:'Introduction',
            index:1
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta:{
            title:'Introduction',
            index:1
        }
    }
]

export default routers
