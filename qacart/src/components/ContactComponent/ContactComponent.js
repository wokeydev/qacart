import React from 'react';
import ReactScrollToElement from 'react-scroll-to-element';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './ContactComponent.css';

export default class ContactComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            contactTitle: '',
            contactusDescription: '',
            sociallinks: []
        }
    }
    componentDidMount() {
                
        fetch('http://localhost:4000/api/contactus')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    contactTitle: result[0].title,
                    contactusDescription: result[0].description
                })
            })   
        fetch('http://localhost:4000/api/sociallinks')
            .then(res=>res.json())
            .then(
                (result) => {
                    this.setState({
                        sociallinks: [...this.state.sociallinks, ...result]
                    })
                }
            )
    }
    render() {
        return(
            <div className="footer">
                <div className="row">
                    <div className="col-sm-12 col-md-6 contact-us">
                        <span>{this.state.contactTitle}</span>
                        <p>{this.state.contactusDescription}</p>
                    </div>
                    <div className="col-sm-12 col-md-6 follow-us">
                        <div>Follow Us</div>
                        <div className="brand-icons">
                            {
                                this.state.sociallinks.map((item, key) => {
                                    if (item.name === 'facebook') {
                                        return <FontAwesomeIcon key={key} icon={faFacebookF} />
                                    } else if (item.name === 'linkedin') {
                                        return <FontAwesomeIcon key={key} icon={faLinkedinIn} />
                                    } else if (item.name === 'twitter') {
                                        return <FontAwesomeIcon key={key} icon={faTwitter} />
                                    } else if (item.name === 'googleplus') {
                                        return <FontAwesomeIcon key={key} icon={faGooglePlusG} />
                                    } else if (item.name === 'instagram') {
                                        return <FontAwesomeIcon key={key} icon={faInstagram} />
                                    }
                                })
                            }
                                
                        </div>
                    </div>
                </div>
                <div className="row info-list">
                    <div className="col-6 col-md-2">
                        <span>Company</span>
                        <ul>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <span>Company</span>
                        <ul>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <span>Company</span>
                        <ul>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <span>Company</span>
                        <ul>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <span>Company</span>
                        <ul>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                            <li><a href="#">Option1</a></li>
                        </ul>
                    </div>
                </div>
                <ReactScrollToElement>
                    <div className="btn-scroll">
                        <a href="#banner-section"><span></span><span></span><span></span></a>
                    </div>
                </ReactScrollToElement>
            </div>
        )
    }
}