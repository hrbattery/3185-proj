import Home from './components/Home.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Page3 from './components/Page3.vue'
import Page4 from './components/Page4.vue'

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
