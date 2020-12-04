import Home from './pages/Home.vue'
import Page1 from './pages/Page1.vue'
import Page2 from './pages/Page2.vue'
import Page3 from './pages/Page3.vue'
import Page4 from './pages/Page4.vue'
import About from './pages/About.vue'
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
