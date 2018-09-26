import React from 'react';
import { Admin, Resource } from 'react-admin';
import Dashboard from './components/DashboardComponent';

import authProvider from './providers/authProvider';
import dataProvider from './providers/dataprovider';
// import addUploadFeature from './providers/addUploadFeature';


import MenuIcon from '@material-ui/icons/Menu';
import BannerIcon from '@material-ui/icons/CloudUpload';
import ImageIcon from '@material-ui/icons/Image';
import ContactUsIcon from '@material-ui/icons/Phonelink';
import SocialLinkIcon from '@material-ui/icons/Favorite';

import { MenuList, MenuEdit, MenuCreate } from './components/MenuListComponent';
import { BannerList, BannerEdit } from './components/BannerList';
import { ImageList, ImageEdit, ImageCreate } from './components/ImageList';
import { ContactUs, ContactUsEdit } from './components/ContactUs';
import { SocialLinkList, SocialLinkEdit, SocialLinkCreate } from './components/SocialLinkList';
import { SamplePageDataList, SamplePageDataEdit, SamplePageDataCreate } from './components/SamplePageDataList';
import { ClientList, ClientEdit, ClientCreate } from './components/ClientListComponent';
import { ExperienceList, ExperienceEdit, ExperienceCreate } from './components/ExperienceListComponent';
// const uploadCapableDataProvider = addUploadFeature(dataProvider);

const App = () => (
      <Admin title="QACART Admin Panel" dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="menus" list={MenuList} icon={MenuIcon} edit={MenuEdit} create={MenuCreate} />
        <Resource name="banners" list={BannerList} icon={BannerIcon} edit={BannerEdit} />
        <Resource name="images" list={ImageList} icon={ImageIcon} edit={ImageEdit} create={ImageCreate} />
        <Resource name="contactus" list={ContactUs} icon={ContactUsIcon} edit={ContactUsEdit} />
        <Resource name="sociallinks" list={SocialLinkList} icon={SocialLinkIcon} edit={SocialLinkEdit} create={SocialLinkCreate} />
        <Resource name="samplepagedata" list={SamplePageDataList} icon={BannerIcon} edit={SamplePageDataEdit} create={SamplePageDataCreate} />
        <Resource name="clients" list={ClientList} icon={ContactUsIcon} edit={ClientEdit} create={ClientCreate} />
        <Resource name="experiences" list={ExperienceList} icon={MenuIcon} edit={ExperienceEdit} create={ExperienceCreate} />
      </Admin>
)

export default App;