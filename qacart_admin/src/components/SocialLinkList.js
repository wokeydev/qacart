import React from 'react';
import {DisabledInput, TextInput, Create, Edit, EditButton, SimpleForm, List, Datagrid, TextField } from 'react-admin';

import Toolbar from '@material-ui/core/Toolbar';

const SocialLinkPagination = ({record}) => {
    return (
        <Toolbar></Toolbar>
    );
}

export const SocialLinkList = (props) => (
    <List title="Social Links" {...props} pagination={<SocialLinkPagination />} bulkActions={false} >
        <Datagrid>
            <TextField source="id" sortable={false} />
            <TextField source="name" sortable={false}/>
            <TextField source="icon" sortable={false}/>
            <TextField source="linkUrl" sortable={false}/>
            <EditButton />
        </Datagrid>
    </List>
)

export const SocialLinkTitle = ({ record }) => {
    return <span>Social Link: { record ? `"${record.name}"` : ''}</span>
}

export const SocialLinkEdit = (props) => (
    <Edit title={<SocialLinkTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="icon" />
            <TextInput source="linkUrl" />
        </SimpleForm>
    </Edit>
);


export const SocialLinkCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="icon" />
            <TextInput source="linkUrl" />
        </SimpleForm>
    </Create>
);