import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField, ReferenceManyField, NumberField, BooleanField, ReferenceField, 
    Filter,
    // Create/Edit Imports
    Create, Edit, SimpleForm, TextInput, TabbedForm, FormTab, AutocompleteInput, ReferenceInput,
    //Validation Imports

    //Delete imports 
    DeleteButton, EditButton,
    // Misc

} from 'react-admin';

const Filters = (props) => (
    <Filter {...props}>
        {/* <SearchInput  source="q" alwaysOn /> */}
        <ReferenceInput label="Reseller" source="reseller_id" reference="resellers" >
                <AutocompleteInput optionText="name" />
        </ReferenceInput>
        <TextInput source="cnpj" />
    </Filter>
);

export const CustomerList = ({ permissions, ...props }) =>  (
    <List {...props} filters={ <Filters/> }>
        <Datagrid>
            <TextField source="name" />
            <TextField source="cnpj" label="CNPJ" />
            <ReferenceField source="reseller_id" reference="resellers">
                <TextField source="name" />
            </ReferenceField>
            <EditButton label="" />
            <DeleteButton label="" />
        </Datagrid>
    </List>
);

export const CustomerCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="cnpj" />
            <ReferenceInput source="reseller_id" reference="resellers" >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);

export const CustomerEdit = ({ permissions, ...props }) => (
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="summary">
                <TextInput source="name" />
                <TextInput source="cnpj" />
                <TextInput source="description" />
                <ReferenceInput source="reseller_id" reference="resellers" >
                    <AutocompleteInput optionText="name" />
                </ReferenceInput>
            </FormTab>
            <FormTab label="users">
                <ReferenceManyField reference="users" target="customer_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="username" />
                        <TextField source="name" />
                        <TextField source="description" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="contexts">
                <ReferenceManyField reference="contexts" target="customer_id" addLabel={false}>
                <Datagrid>
                    <TextField source="name" />
                    <NumberField source="maxQuota" />
                    <BooleanField source="enabled" />
                    <EditButton label="" />
                    <DeleteButton label="" />
                </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);