import React from 'react';
// import { RichTextInput } from 'ra-input-rich-text';

import {DisabledInput,RichTextField, LongTextInput, TextInput, Edit, EditButton, SimpleForm, List, Datagrid, TextField } from 'react-admin';

import Toolbar from '@material-ui/core/Toolbar';

const BannerPagination = ({record}) => {
    return (
        <Toolbar></Toolbar>
    );
}

export const BannerList = (props) => (
    <List title="Banner" {...props} pagination={<BannerPagination />} bulkActions={false}>
        <Datagrid>
            <TextField source="id" sortable={false} />
            <TextField source="title" sortable={false}/>
            <RichTextField source="description" sortable={false}/>
            <EditButton />
        </Datagrid>
    </List>
)

export const BannerTitle = ({ record }) => {
    return <span>Banner</span>
}

export const BannerEdit = (props) => (
    <Edit title={<BannerTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <LongTextInput source="description" />
        </SimpleForm>
    </Edit>
);