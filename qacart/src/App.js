import React, { Component } from 'react';

import './App.css';

// Import Components
import Head from './components/HeadComponent/Head';
import CarouselComponent from './components/CarouselComponent/CarouselComponent';
import BannerComponent from './components/BannerComponent/BannerComponent';
import ServicesComponent from './components/ServicesComponent/ServicesComponent';
import ClientsComponent from './components/ClientsComponent/ClientsComponent';
import OfficeComponent from './components/OfficeComponent/OfficeComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
// import ContactFormComponent from './components/ContactFormComponent/ContactFormComponent';
import ExperienceComponent from './components/ExperienceComponent/ExperienceComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.domRef = React.createRef();
  }
  render() {
    return (
      <div className="App">
        <CarouselComponent domRef={this.domRef} />
        <Head />
        <BannerComponent domRef={this.domRef} />
        <ServicesComponent />
        <ExperienceComponent />
        <ClientsComponent />
        <OfficeComponent />
        <ContactComponent />
      </div>
    );
  }
}

export default App;
