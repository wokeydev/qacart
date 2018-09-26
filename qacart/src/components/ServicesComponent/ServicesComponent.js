import React from 'react';
import ReactScrollToElement from 'react-scroll-to-element';

import './ServicesComponent.css';
import IconComponent from './IconComponent/IconComponent';

export default class ServicesComponent extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            winWidth: 1920,
            winHeight: 1080,
            aspecratio: 1.7777778
        }
        this.updateDimesions = this.updateDimesions.bind(this);
    }
    updateDimesions() {
        this.setState({
            winHeight: window.innerHeight,
            winWidth: window.innerWidth,
            aspecratio: window.innerWidth / window.innerHeight
        });
    }
    
    componentDidMount() {
        this.updateDimesions();
        window.addEventListener("resize", this.updateDimesions);
    }
    
    componentWillMount() {
        window.removeEventListener("resize", this.updateDimesions);
    }

    render() {
        let component;
        if (this.state.winWidth > 800) {
            component = (
                <div className="services">
                <div className="services-inner">
                    <IconComponent servicename="webapptesting" serviceName_bold="Web Apps" serviceName_nobold="Testing" iconImage="web-app-testing.png" top={this.state.winHeight * 0.04 + 'px'} left={this.state.winWidth * 0.45 + 'px'} aspecratio={this.state.aspecratio}/>
                    <IconComponent servicename="mobiledevicetest" serviceName_bold="Mobile Devices" serviceName_nobold="Test" iconImage="mobile-devices-test.png" top={this.state.winHeight * 0.13 + 'px'} left={this.state.winWidth * 0.3 + 'px'} aspecratio={this.state.aspecratio}/>
                    <IconComponent servicename="freelancing" serviceName_bold="Freelancing" serviceName_nobold="" iconImage="freelancing.png" top={this.state.winHeight * 0.13 + 'px'} left={this.state.winWidth * 0.6 + 'px'} aspecratio={this.state.aspecratio}/>
                    <IconComponent servicename="mobileapptesting" serviceName_bold="Mobile Apps" serviceName_nobold="Testing" iconImage="mobile-apps-testing.png" top={this.state.winHeight * 0.38 + 'px'} left={this.state.winWidth * 0.3 + 'px'} aspecratio={this.state.aspecratio}/>
                    <IconComponent servicename="consulting" serviceName_bold="Consulting" serviceName_nobold="" iconImage="consulting.png" top={this.state.winHeight * 0.38 + 'px'} left={this.state.winWidth * 0.6 + 'px'} aspecratio={this.state.aspecratio}/>
                    <IconComponent servicename="training" serviceName_bold="Training" serviceName_nobold="Academy" iconImage="training-academy.png" top={this.state.winHeight * 0.5 + 'px'} left={this.state.winWidth * 0.45 + 'px'} aspecratio={this.state.aspecratio}/>
                    <ReactScrollToElement type="class" element="experience-div">
                        <div className="btn-scroll">
                            <a href="#banner-section"><span></span><span></span><span></span></a>
                        </div>
                    </ReactScrollToElement>
                </div>      
                </div>      
            )
        } else {
            component = (
                <div className="services">
                <div className="services-inner">
                    <IconComponent servicename="webapptesting" serviceName_bold="Web Apps" serviceName_nobold="Testing" iconImage="web-app-testing.png" top={this.state.winHeight * 0.04 + 'px'} left={this.state.winWidth * 0.17 + 'px'} aspecratio={this.state.aspecratio}/>
                    <IconComponent servicename="mobiledevicetest" serviceName_bold="Mobile Devices" serviceName_nobold="Test" iconImage="mobile-devices-test.png" top={this.state.winHeight * 0.04 + 'px'} left={this.state.winWidth * 0.58 + 'px'} aspecratio={this.state.aspecratio}/>
                    <IconComponent servicename="freelancing" serviceName_bold="Freelancing" serviceName_nobold="" iconImage="freelancing.png" top={this.state.winHeight * 0.3 + 'px'} left={this.state.winWidth * 0.17 + 'px'} aspecratio={this.state.aspecratio}/>
                    <IconComponent servicename="mobileapptesting" serviceName_bold="Mobile Apps" serviceName_nobold="Testing" iconImage="mobile-apps-testing.png" top={this.state.winHeight * 0.3 + 'px'} left={this.state.winWidth * 0.58 + 'px'} aspecratio={this.state.aspecratio}/>
                    <IconComponent servicename="consulting" serviceName_bold="Consulting" serviceName_nobold="" iconImage="consulting.png" top={this.state.winHeight * 0.55 + 'px'} left={this.state.winWidth * 0.17 + 'px'} aspecratio={this.state.aspecratio}/>
                    <IconComponent servicename="training" serviceName_bold="Training" serviceName_nobold="Academy" iconImage="training-academy.png" top={this.state.winHeight * 0.55 + 'px'} left={this.state.winWidth * 0.58 + 'px'} aspecratio={this.state.aspecratio}/>
                    <ReactScrollToElement type="class" element="experience-div">
                        <div className="btn-scroll">
                            <a href="#banner-section"><span></span><span></span><span></span></a>
                        </div>
                    </ReactScrollToElement>
                </div> 
                </div>     
            )
        }
        return(
            <div>
                {component}
            </div>
        )
    }
}