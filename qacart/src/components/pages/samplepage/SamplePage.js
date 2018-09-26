import React from 'react';
import Head from '../../HeadComponent/Head';

import './SamplePage.css';

export default class SamplePage extends  React.Component {
    constructor() {
        super();
        this.state = {
            samplepageData: [],
        }
    }
    componentDidMount() {
        fetch('http://localhost:4000/api/samplepagedata')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    samplepageData: [...this.state.samplepageData, ...result]
                })
            })   
    }
    render() {
        
        return (
            <div>
                <Head />
                <div className="samplepage-div">
                        {
                            this.state.samplepageData.map((item, index) => {
                                var itempage = '/' + `${item.page}`;
                                if (itempage === this.props.location.pathname) {
                                    return (
                                        <div className="samplepage-image-div" key={index}>
                                            <img className="samplepage-image" src={'/image' + item.image}  />
                                            <p>{item.text}</p>
                                        </div>
                                    )
                                }
                            })
                        }
                        
                </div>
            </div>
        )
    }
}