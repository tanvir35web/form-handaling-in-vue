import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import Contact from "./pages/Contact.vue";
import Customer from "./pages/Customer.vue";
import Customers from "./pages/Customers.vue";
import CustomerDetails from "./pages/CustomerDetails.vue";
import CustomerEdit from "./pages/CustomerEdit.vue";
import NotFound from "./pages/NotFound.vue";

export const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/contact/:id",
        component: Contact,
    },
    {
        path: "/customer",
        component: Customer,
        children: [
            {
                path: "",
                component: Customers,
            },
            {
                path: ":id",
                component: CustomerDetails,
            },
            {
                path: ":id/edit",
                component: CustomerEdit,
                name: "customerEdit",
            },
        ],
    },
    {
        path: "*",
        component: NotFound,
    }
];
