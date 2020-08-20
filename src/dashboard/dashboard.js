import React from 'react';
import Card from '@material-ui/core/Card';
import Welcome from './welcome';
import { MX, SPF } from './dns'
import LocaleSwitcher from './LocaleSwitcher'


export const Dashboard = () => {
    return (
    <Card>
        <Welcome />
        <LocaleSwitcher />
        <MX />
        <SPF />
    </Card>

);
};