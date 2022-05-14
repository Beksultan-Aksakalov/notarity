import React from 'react';
import { Attorney, Home } from '../processes';

const Routes = [
    {
        path: '/',
        sidebarName: 'Home',
        component: Home
    },
    {
        path: '/attorney',
        sidebarName: 'Доверенности',
        component: Attorney
    }
];

export default Routes;