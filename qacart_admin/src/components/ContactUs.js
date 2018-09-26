import React from 'react';

import {DisabledInput,RichTextField,LongTextInput, TextInput, Edit, EditButton, SimpleForm, List, Datagrid, TextField } from 'react-admin';

import Toolbar from '@material-ui/core/Toolbar';

const ContactUsPagination = ({record}) => {
    return (
        <Toolbar></Toolbar>
    );
}

export const ContactUs = (props) => (
    <List title="Contact Us" {...props} pagination={<ContactUsPagination />}  bulkActions={false}>
        <Datagrid>
            <TextField source="id" sortable={false} />
            <TextField source="title" sortable={false}/>
            <RichTextField source="description" sortable={false}/>
            <EditButton />
        </Datagrid>
    </List>
)

export const ContactUsTitle = ({ record }) => {
    return <span>Contact Us Edit</span>
}

export const ContactUsEdit = (props) => (
    <Edit title={<ContactUsTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <LongTextInput source="description" />
        </SimpleForm>
    </Edit>
);