import Home from './pages/Home.vue'
import Page1 from './pages/Page1.vue'
import Page2 from './pages/Page2.vue'
import Page3 from './pages/Page3.vue'
import Page4 from './pages/Page4.vue'
// import Header from './components/Header.vue'

const routers = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/p1',
        name: 'page1',
        component: Page1,
    },
    {
        path: '/p2',
        name: 'page2',
        component: Page2,
    },
    {
        path: '/p3',
        name: 'page3',
        component: Page3,
    },
    {
        path: '/p4',
        name: 'page4',
        component: Page4,
    }
]

export default routers
