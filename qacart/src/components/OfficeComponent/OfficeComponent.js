import React from 'react';
import IndicatorComponent from './IndicatorComponent/IndicatorComponent';

import './OfficeComponent.css';

export default class OfficeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            winHeight: window.innerHeight,
            winWidth: window.innerWidth,
            scale: null
        }
        this.mapRef = React.createRef();
        this.updateDimensions = this.updateDimensions.bind(this);
        this.officePage = this.officePage.bind(this);
    }
    officePage() {
        window.location = '/offices';
    }
    updateDimensions() {
        this.setState({
            winHeight: window.innerHeight,
            winWidth: window.innerWidth
        })
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        this.setState({
            scale: Math.min(window.innerHeight / 1080, window.innerWidth / 1920)
        });
    }

    componentWillMount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        var positions = [
            {
                left: "50px",
                top: "120px"
            },
            {
                left: "120px",
                top: "60px"
            },
            {
                left: "500px",
                top: "60px"
            },
            {
                left: "80px",
                top: "80px"
            }
        ]
        return(
            <div className="office-div row">
                <div className="col-lg-3 col-md-12 office-title">
                    Our Offices
                </div>
                <div className="col-lg-6 col-md-12 office-map" id="office-map" ref={this.mapRef}>
                    <img  src="./image/worldmap.png" alt="worldmap" onClick={this.officePage} />
                    {
                        positions.map( (position, index) => <IndicatorComponent key={index} positionStyle={position} />)
                    }
                </div>
            </div>
        )
    }
}