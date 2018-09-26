import React from 'react';
import { Route,Redirect } from 'react-router-dom';

import './IconComponent.css';

export default class IconComponent extends React.Component {
    constructor () {
        super();
        this.state = {
            redirecto: false,
        }
        this.showMore = this.showMore.bind(this);
    }

    showMore() {
        this.setState({
            redirecto: true
        })
    }
    render() {
        var positionStyle = {
            left: this.props.left,
            top: this.props.top,
        }
        if (this.state.redirecto) {
            var redirect = "/services/" + this.props.servicename;
            return <Redirect to={redirect} />
        } else {
            return(
                <div className="service-icon" style={positionStyle}>
                    <img className="bk-img" src="./image/service-icon-bk.png" alt="Service Icon Background" />
                    <div className="icon-img-div">
                        <img className="icon-img" src={"./image/" + this.props.iconImage } alt="freelancing" />
                    </div>
                    <span className="service-name">
                        <b>{this.props.serviceName_bold}</b>
                        <span>{this.props.serviceName_nobold}</span>
                    </span>
                    <div className="show-more" onClick={this.showMore}>
                        <a href="#">Show More</a>
                    </div>
                </div>
            );
        }
        
    }
}