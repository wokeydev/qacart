import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import ServicePage from './components/pages/servicepage/ServicePage';
import SamplePage from './components/pages/samplepage/SamplePage';

import registerServiceWorker from './registerServiceWorker';
import 'jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/mdbreact/dist/css/mdb.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/services/:serviceName' component={ServicePage}/>
            <Route path='/portfolio' component={SamplePage} />
            <Route path='/company' component={SamplePage} />
            <Route path='/service' component={SamplePage} />
            <Route path='/testing' component={SamplePage} />
            <Route path='/approach' component={SamplePage} />
            <Route path='/offices' component={SamplePage} />
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
