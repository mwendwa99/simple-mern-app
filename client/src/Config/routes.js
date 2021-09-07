import React from 'react';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import PageNotFound from '../Pages/NotFound';

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/*',
        component: PageNotFound
    }
];

export default routes;