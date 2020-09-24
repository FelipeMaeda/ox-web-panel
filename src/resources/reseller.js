import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField, ReferenceManyField, NumberField, BooleanField,
    Filter,
    // Create/Edit Imports
    Create, Edit, SimpleForm, TextInput, TabbedForm, FormTab,
    //Validation Imports

    //Delete imports 
    // Misc

} from 'react-admin';

const Filters = (props) => (
    <Filter {...props}>
        {/* <SearchInput  source="q" alwaysOn /> */}
        <TextInput source="cnpj" />
    </Filter>
);

export const ResellerList = ({ permissions, ...props }) =>  (
    <List {...props} filters={ <Filters/> }>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="cnpj" label="CNPJ" />
        </Datagrid>
    </List>
);

export const ResellerCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="cnpj" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const ResellerEdit = ({ permissions, ...props }) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="summary">
                <TextInput source="name" />
                <TextInput source="cnpj" />
                <TextInput source="description" />
            </FormTab>
            <FormTab label="users">
                <ReferenceManyField reference="users" target="reseller_id" addLabel={false}>
                    <Datagrid rowClick="edit">
                        <TextField source="username" />
                        <TextField source="name" />
                        <TextField source="description" />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="customer">
                <ReferenceManyField reference="customers" target="reseller_id" addLabel={false}>
                    <Datagrid rowClick="edit">
                        <TextField source="name" /> 
                        <TextField source="cnpj" />
                        <TextField source="description" />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="contexts">
                <ReferenceManyField reference="contexts" target="reseller_id" addLabel={false}>
                <Datagrid rowClick="edit">
                    <TextField source="name" />
                    <NumberField source="maxQuota" />
                    <BooleanField source="enabled" />
                </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);