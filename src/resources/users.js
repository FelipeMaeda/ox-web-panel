import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField, ReferenceField, BooleanField, Filter,
    // Create/Edit Imports
    Create, Edit, SimpleForm, TextInput, BooleanInput, ReferenceInput, AutocompleteInput,
    //Validation Imports
    required, email, regex, 
    //Button imports 
    DeleteButton, EditButton,
    // Misc

} from 'react-admin';

const validateUsername = [
    required(),
    email()   
];

const validatePassword = [
    required(),
    regex(
    /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w\d!@#$%_]{6,64}$/,
    'required upper and lower case letters. Can contain !@#$%_'
    )
];


const Filters = (props) => (
    <Filter {...props}>
        {/* <SearchInput  source="q" alwaysOn /> */}
        <ReferenceInput label="Reseller" source="reseller_id" reference="resellers" >
                <AutocompleteInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Customer" source="customer_id" reference="customers" >
                <AutocompleteInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const UserList = ({ permissions, ...props }) =>  (
    <List {...props} filters={ <Filters/> }>
        <Datagrid>
            <TextField source="username" />
            <TextField source="name" />
            <TextField source="description" />
            <BooleanField source ="isAdmin" />
            <ReferenceField source="reseller_id" reference="resellers">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="customer_id" reference="customers">
                <TextField source="name" />
            </ReferenceField>
            <EditButton label="" />
            <DeleteButton label="" />
        </Datagrid>
    </List>
);

export const UserCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" validate={ validateUsername } />
            <TextInput source="name" />
            <TextInput type="password" source="password" validate={ validatePassword }/>
            <TextInput source="description" />
            <ReferenceInput source="reseller_id" reference="resellers" >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="customer_id" reference="customers" >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
            <BooleanInput source="isAdmin" /> 
        </SimpleForm>
    </Create>
);

export const UserEdit = ({ permissions, ...props }) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="description" />
            <TextInput source="name" />
            <ReferenceInput source="reseller_id" reference="resellers">
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="customer_id" reference="customers">
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
            <BooleanInput source="isAdmin" />
        </SimpleForm>
    </Edit>
);