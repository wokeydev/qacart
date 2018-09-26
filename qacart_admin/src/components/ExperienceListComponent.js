import React from 'react';
import {DisabledInput, TextInput, Create, Edit, EditButton, SimpleForm, List, Datagrid, TextField } from 'react-admin';

import Toolbar from '@material-ui/core/Toolbar';

const ExperiencePagination = ({record}) => {
    return (
        <Toolbar></Toolbar>
    );
}

export const ExperienceList = (props) => (
    <List title="Experiences" {...props} pagination={<ExperiencePagination />} bulkActions={false}>
        <Datagrid>
            <TextField source="id" sortable={false} />
            <TextField source="amount_num" sortable={false}/>
            <TextField source="description" sortable={false}/>
            <EditButton />
        </Datagrid>
    </List>
)

export const ExperienceTitle = ({ record }) => {
    return <span>Experience Item Edit: { record ? `"${record.id}"` : ''}</span>
}

export const ExperienceEdit = (props) => (
    <Edit title={<ExperienceTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="amount_num" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

export const ExperienceCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="amount_num" />
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);