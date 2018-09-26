import React from 'react';
import {DisabledInput, TextInput, Create, Edit, EditButton, SimpleForm, List, Datagrid, TextField } from 'react-admin';

import Toolbar from '@material-ui/core/Toolbar';

const ImagePagination = ({record}) => {
    return (
        <Toolbar></Toolbar>
    );
}

export const ImageList = (props) => (
    <List title="Images" {...props} pagination={<ImagePagination />} bulkActions={false}>
        <Datagrid>
            <TextField source="id" sortable={false} />
            <TextField source="phone_img" sortable={false}/>
            <TextField source="desktop_img" sortable={false}/>
            <TextField source="alt" sortable={false} />
            <EditButton />
        </Datagrid>
    </List>
)



export const ImageTitle = ({ record }) => {
    return <span>Image: { record ? `"${record.alt_text}"` : ''}</span>
}

export const ImageEdit = (props) => (
    <Edit title={<ImageTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="phone_img" />
            <TextInput source="desktop_img" />
            <TextInput source="alt_text" />
        </SimpleForm>
    </Edit>
);


export const ImageCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="phone_img" />
            <p>Input the Url of Image for phone carousel. Size must be 600 * 600</p>
            <TextInput source="desktop_img" />
            <p>Input the Url of Image for desktop carousel. Desktop Image must be 4200 * 4200 in size</p>
            <TextInput source="alt_text" />
        </SimpleForm>
    </Create>
);