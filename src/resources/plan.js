import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField, NumberField,
    // Create/Edit Imports
    Create, Edit, SimpleForm, TextInput, NumberInput,
    //Validation Imports

    //Delete imports 
    DeleteButton, EditButton
    // Misc

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

