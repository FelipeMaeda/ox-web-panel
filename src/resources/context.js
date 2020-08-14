import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField, ReferenceField, BooleanField, NumberField, ReferenceManyField,
    // Create/Edit Imports
    Create, Edit, SimpleForm, TextInput, ReferenceInput, AutocompleteInput, BooleanInput, TabbedForm, FormTab,
    //Validation Imports

    //Delete imports 
    DeleteButton, EditButton
    // Misc

} from 'react-admin';

export const ContextList = ({ permissions, ...props }) =>  (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <BooleanField source="enabled" />
            <ReferenceField source="customer_id" reference="customers">
                <TextField source="name" />
            </ReferenceField>
            <EditButton label="" />
            <DeleteButton label="" />
        </Datagrid>
    </List>
);

export const ContextCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput type="password" source="password" />
            <ReferenceInput source="customer_id" reference="customers" >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const ContextEdit = ({ permissions, ...props }) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="summary">
                <TextInput source="name" />
                <TextInput source="description" />
                <BooleanInput source="enabled" />
                <ReferenceInput source="customer_id" reference="customers" >
                    <AutocompleteInput optionText="name" />
                </ReferenceInput>
            </FormTab>
            <FormTab label="mailboxes">
                <ReferenceManyField reference="mailboxes" target="ctx_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="display_name" />
                        <TextField source="email" />
                        <NumberField source="maxQuota" />
                        <BooleanField source="enabled" />
                        <EditButton label="" />
                        <DeleteButton label="" />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="groups">

            </FormTab>
        </TabbedForm>
    </Edit>
);