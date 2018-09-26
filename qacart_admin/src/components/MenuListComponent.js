import React from 'react';
import {DisabledInput, TextInput, Create, Edit, EditButton, SimpleForm, List, Datagrid, TextField } from 'react-admin';

import Toolbar from '@material-ui/core/Toolbar';

const MenuPagination = ({record}) => {
    return (
        <Toolbar></Toolbar>
    );
}

export const MenuList = (props) => (
    <List title="Menus" {...props} pagination={<MenuPagination />} bulkActions={false}>
        <Datagrid>
            <TextField source="id" sortable={false} />
            <TextField source="name" sortable={false}/>
            <TextField source="linkUrl" sortable={false}/>
            <EditButton />
        </Datagrid>
    </List>
)



export const MenuTitle = ({ record }) => {
    return <span>Menu: { record ? `"${record.name}"` : ''}</span>
}

export const MenuEdit = (props) => (
    <Edit title={<MenuTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="linkUrl" />
        </SimpleForm>
    </Edit>
);


export const MenuCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="linkUrl" />
        </SimpleForm>
    </Create>
);