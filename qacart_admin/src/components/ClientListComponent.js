import React from 'react';
// import {DisabledInput, TextInput,ImageInput,ImageField, Create, Edit, EditButton, SimpleForm, List, Datagrid, TextField } from 'react-admin';
import {DisabledInput, TextInput, Create, Edit, EditButton, SimpleForm, List, Datagrid, TextField } from 'react-admin';

import Toolbar from '@material-ui/core/Toolbar';

const ClientPagination = ({record}) => {
    return (
        <Toolbar></Toolbar>
    );
}

export const ClientList = (props) => (
    <List title="Clients" {...props} pagination={<ClientPagination />} bulkActions={false}>
        <Datagrid>
            <TextField source="id" sortable={false} />
            <TextField source="name" sortable={false}/>
            <TextField source="icon_img" sortable={false}/>
            <EditButton />
        </Datagrid>
    </List>
)


export const ImageDescription = ({ record }) => {
    return <span>Input the Url for Client Icon Image. Image size must be 100 * 100</span>
}
export const ClientTitle = ({ record }) => {
    return <span>Client: { record ? `"${record.name}"` : ''}</span>
}

export const ClientEdit = (props) => (
    <Edit title={<ClientTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="icon_img" />
            {/* <ImageInput source="icon_img" label="Related pictures" placeholder={<p>Drop your file here</p>} multiple={false}>
                <ImageField source="icon_img" title="title" />
            </ImageInput> */}
            <ImageDescription />
        </SimpleForm>
    </Edit>
);



export const ClientCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="icon_img" />
            <ImageDescription />
        </SimpleForm>
    </Create>
);