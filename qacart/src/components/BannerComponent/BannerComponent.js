import React from 'react';

import './BannerComponent.css';

export default class BannerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.loadBanner = this.loadBanner.bind(this);
        this.state = {
            banner: [],
        }
    }
    componentDidMount() {
        this.loadBanner();
    }
    loadBanner () {
        fetch('http://localhost:4000/api/banners')
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        banner: [...this.state.banner, ...result]
                    })
            })    
    }
    render() {
        return (
            
            <div className="banner" id="banner-div" ref={this.props.domRef}>
                {
                    this.state.banner.map((item,index) => {
                        return (
                            <div key={index}>
                                <p className="title">{item.title}</p>
                                <p className="description">{item.description}</p>
                            </div>
                        )
                        
                    })
                }
            </div>
        )
    }
}