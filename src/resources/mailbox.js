import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField, NumberField, BooleanField, ReferenceField, Filter,
    // Create Imports
    Create, Edit, SimpleForm, 
    TextInput, ReferenceInput, SelectInput, AutocompleteInput, ArrayInput, SimpleFormIterator,
    //Validation Imports

    //Button imports 
    DeleteButton, EditButton,
    // Misc

} from 'react-admin';

const plans = [
        {'id': 1, 'name': 'INOVA OXMAIL BASIC 2GB'}, 
        {'id': 2, 'name': 'INOVA OXMAIL BASIC 5GB'}, 
        {'id': 3, 'name': 'INOVA OXMAIL ADVANCED 2GB'},
        {'id': 4, 'name': 'INOVA OXMAIL ADVANCED 5GB'},
]

export const MailboxFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const MailboxList = ({ permissions, ...props }) =>  (
    <List {...props} filters={ <MailboxFilter /> }>
        <Datagrid>
            <TextField source="display_name" />
            <TextField source="email" />
            <NumberField source="maxQuota" />
            <BooleanField source="enabled" />
            <ReferenceField label="Context" source="ctx_id" reference="contexts">
                <TextField source="name" />
            </ReferenceField>
            <EditButton label="" />
            <DeleteButton label="" />
        </Datagrid>
    </List>
);

export const MailboxCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput  type="password" source="password" />
            <SelectInput source="plan_id" label="Plan" choices={ plans } />
            <TextInput source="given_name" />
            <TextInput source="last_name" />
            <ReferenceInput label="Context" source="ctx_id" reference="contexts" >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
            <ArrayInput source="aliases">
                <SimpleFormIterator>
                    <TextInput label=""/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

export const MailboxEdit = ({ permissions, ...props }) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="password" />
            <SelectInput source="plan_id" label="Plan" choices={ plans } />
            <TextInput source="given_name" />
            <TextInput source="last_name" />
            <ReferenceInput label="Context" source="ctx_id" reference="contexts" >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

