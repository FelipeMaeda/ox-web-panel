import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField, ReferenceField, BooleanField, NumberField, ReferenceManyField,
    // Create/Edit Imports
    Create, Edit, SimpleForm, TextInput, ReferenceInput, AutocompleteInput, BooleanInput, TabbedForm, FormTab,
    FormDataConsumer, Filter,
    //Validation Imports

    //Delete imports 
    // Misc

} from 'react-admin';

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

export const ContextList = ({ permissions, ...props }) =>  (
    <List {...props} filters={ <Filters /> } >
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <BooleanField source="enabled" />
            <ReferenceField source="customer_id" reference="customers">
                <TextField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const ContextCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <ReferenceInput initialValue="" source="reseller_id" reference="resellers" >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
            <FormDataConsumer>
                {({ formData }) =>
                <ReferenceInput disabled={ formData.reseller_id===""  }
                    filter={ {reseller_id: formData.reseller_id} }
                    source="customer_id"
                    reference="customers" >
                    <AutocompleteInput optionText="name" />
                </ReferenceInput>
                }
            </FormDataConsumer>
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
            </FormTab>
            <FormTab label="mailboxes">
                <ReferenceManyField reference="mailboxes" target="ctx_id" addLabel={false}>
                    <Datagrid rowClick="edit">
                        <TextField source="display_name" />
                        <TextField source="email" />
                        <NumberField source="maxQuota" />
                        <BooleanField source="enabled" />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);