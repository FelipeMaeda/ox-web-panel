import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField,
    // Create Imports
    Create, SimpleForm, TextInput, ReferenceInput, AutocompleteInput,
    //Validation Imports

    //Delete imports 
    DeleteButton, EditButton,
    // Misc

} from 'react-admin';

export const ResourceList = ({ permissions, ...props }) =>  (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
          <EditButton label="" />
          <DeleteButton label="" />
        </Datagrid>
    </List>
);

export const ResourceCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <ReferenceInput label="Context" source="ctx_id" reference="contexts" >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
