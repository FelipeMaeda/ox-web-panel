import React from 'react';
import Card from '@material-ui/core/Card';
import Welcome from './welcome';
import { MX, SPF } from './dns'



export const Dashboard = () => {
    return (
    <Card>
        <Welcome />
        <MX />
        <SPF />
    </Card>

);
};