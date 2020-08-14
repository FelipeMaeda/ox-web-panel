import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField,
    // Create Imports
    Create, SimpleForm, TextInput, ReferenceInput, SelectArrayInput, AutocompleteInput,
    //Validation Imports

    //Delete imports 
    DeleteButton, EditButton,
    // Misc

} from 'react-admin';

export const GroupList = ({ permissions, ...props }) =>  (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
          <EditButton label="" />
          <DeleteButton label="" />
        </Datagrid>
    </List>
);

export const GroupCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput label="Context" source="ctx_id" reference="contexts" >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="mailbox_id" reference="mailboxes" >
                <SelectArrayInput 
                    optionText="email"
                />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
