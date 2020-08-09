import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField, NumberField,

} from 'react-admin';

export const PlanList = ({ permissions, ...props }) =>  (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <NumberField source="quota" />
            <TextField source="description" />            
        </Datagrid>
    </List>
);

