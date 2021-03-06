import React from 'react';
import {
    // List Imports 
    List, Datagrid, TextField, NumberField, BooleanField, ReferenceField, 
    Filter,
    // Create Imports
    Create, Edit, SimpleForm, 
    TextInput, ReferenceInput, SelectInput, AutocompleteInput, ArrayInput, SimpleFormIterator,
    //Validation Imports

    //Button imports 
    // Misc

} from 'react-admin';

export const Filters = (props) => (
    <Filter {...props}>
        <ReferenceInput label="Context" source="ctx_id" reference="contexts" >
                <AutocompleteInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Plan" source="plan_id" reference="plans">
                <AutocompleteInput source="name" />
        </ReferenceInput>
    </Filter>
);

export const MailboxList = ({ permissions, ...props }) =>  (
    <List {...props} filters={ <Filters /> }>
        <Datagrid rowClick="edit">
            <TextField source="display_name" />
            <TextField source="email" />
            <ReferenceField source="plan_id" reference="plans">
                <TextField source="name" />
            </ReferenceField>
            <NumberField source="maxQuota" />
            <BooleanField source="enabled" />
            <ReferenceField source="ctx_id" reference="contexts">
                <TextField source="name" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const MailboxCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm redirect={false}>
            <TextInput source="email" />
            <TextInput  type="password" source="password" />
            <ReferenceInput label="Plan" source="plan_id" reference="plans" >
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="given_name" />
            <TextInput source="last_name" />
            <ReferenceInput source="ctx_id" reference="contexts" >
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
            <TextField source="email" />
            <TextInput type="password" source="password" />
            <ReferenceInput label="Plan" source="plan_id" reference="plans" >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
            <TextField source="given_name" />
            <TextField source="last_name" />
            <ReferenceField label="Context" source="ctx_id" reference="contexts">
                <TextField source="name" />
            </ReferenceField>
        </SimpleForm>
    </Edit>
);

