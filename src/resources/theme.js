import React from 'react';
import {
    Create, 
    SimpleForm, 
    TextInput, 
    ReferenceInput, 
    AutocompleteInput, 
    NumberInput,
    regex

} from 'react-admin';


const validateColor =  regex(/^#\d{6}$/, 'Must be a color Code, example: #11cc01')
const validateLogoUrl = regex(/^https:\/\/.*\..*$/, 'Must be be a valid https URL')

export const ThemeCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="logoUrl" validate={ validateLogoUrl }/>
            <TextInput source="mainColor" validate={ validateColor } />
            <NumberInput source="logoWidth" defaultValue={ 60 } />
            <ReferenceInput source="ctx_id" reference="contexts" >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);