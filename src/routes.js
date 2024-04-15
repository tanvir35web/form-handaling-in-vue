import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import Contact from "./pages/Contact.vue";

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]