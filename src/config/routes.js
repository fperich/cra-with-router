// eslint-disable-next-line
import { lazy } from 'react';

import loadable from "@loadable/component";
// import Loading from "./Loading.js";

const Home = loadable(() => import("./../pages/Home"), {
    fallback: ''
});

const About = loadable(() => import("./../pages/About"), {
    fallback: ''
});

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
];

export {
    routes
};
