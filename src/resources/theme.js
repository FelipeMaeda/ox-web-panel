import React from 'react';
import {
    Create, 
    SimpleForm, 
    TextInput, 
    ReferenceInput, 
    AutocompleteInput, 
    NumberInput,
    FormDataConsumer,
    regex

} from 'react-admin';

import { ColorInput } from 'react-admin-color-input'

//const validateColor =  regex(/^#\d{6}$/, 'Must be a color Code, example: #11cc01')
const validateLogoUrl = regex(/^https:\/\/.*\..*$/, 'Must be be a valid https URL')

export const ThemeCreate = ({ permissions, ...props }) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="logoUrl" validate={ validateLogoUrl }/>
            <NumberInput source="logoWidth" defaultValue={ 60 } />
            <ColorInput source="mainColor"/>
            <FormDataConsumer>
                {({ formData }) =>
                     <img alt=""
                         src={ formData.logoUrl }
                         width={ formData.logoWidth }
                         style={{background: formData.mainColor}}
                     />
                }
            </FormDataConsumer>
            <ReferenceInput source="ctx_id" reference="contexts" >
                <AutocompleteInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);