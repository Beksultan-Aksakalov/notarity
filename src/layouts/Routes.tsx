import React from 'react';
import { LabTabs } from '../pages';
import ListAttorney from '../processes/Attorney/ListAttorney';

const Routes = [
    {
        path: '/',
        sidebarName: 'Home',
        component: LabTabs
    },
    {
        path: '/attorneys',
        sidebarName: 'Доверенности',
        component: ListAttorney
    }
];

export default Routes;