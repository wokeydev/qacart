import React from 'react';

import { TextInput, Create, Edit,  EditButton, SimpleForm, List, Datagrid, EmailField, TextField } from 'react-admin';

export const UserList = (props) => (
    <List title="All users" {...props} bulkActions={false}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <EditButton />
        </Datagrid>
    </List>
)

export const UserName = (record) => {
    return (
        <span>{record ? `"${record.name}"` : ''}</span>
    )
}

export const UserEdit = (props) => (
    <Edit title={<UserName />} {...props}>
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
    </Edit>
)

export const UserCreate = (props) => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="emaill" />
      </SimpleForm>
    </Create>
)