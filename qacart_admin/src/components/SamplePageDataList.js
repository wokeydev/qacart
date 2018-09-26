import React from 'react';
// import { RichTextInput } from 'ra-input-rich-text';

import {DisabledInput,RichTextField, LongTextInput, TextInput, Create, Edit, EditButton, SimpleForm, List, Datagrid, TextField } from 'react-admin';

import Toolbar from '@material-ui/core/Toolbar';

const SamplePageDataPagination = ({record}) => {
    return (
        <Toolbar></Toolbar>
    );
}

export const SamplePageDataList = (props) => (
    <List title="Sample Page Data List" {...props} pagination={<SamplePageDataPagination />} bulkActions={false}>
        <Datagrid>
            <TextField source="id" sortable={false} />
            <TextField source="page" sortable={false}/>
            <TextField source="image" sortable={false}/>
            <RichTextField source="text" sortable={false}/>
            <EditButton />
        </Datagrid>
    </List>
)



export const SamplePageDataTitle = ({ record }) => {
    return <span>Sample Page Data Edit</span>
}

export const SamplePageDataEdit = (props) => (
    <Edit title={<SamplePageDataTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="page" />
            <TextInput source="image" />
            <LongTextInput source="text" />
        </SimpleForm>
    </Edit>
);

export const SamplePageDataCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="page" />
            <TextInput source="image" />
            <LongTextInput source="text" />
        </SimpleForm>
    </Create>
);