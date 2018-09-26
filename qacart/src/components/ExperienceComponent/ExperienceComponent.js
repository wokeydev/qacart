import React from 'react';
import CountUp from 'react-countup';

import './ExperienceComponent.css';

export default class ExperienceComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            experienceitems: [],
            delayTimeSec: 10
        }
    }
    componentDidMount() {
        fetch('http://localhost:4000/api/experiences')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    experienceitems: [...this.state.experienceitems, ...result]
                })
            })   
    }

    render() {
        return(
            <div className="experience-div">
                <div className="dotted row">
                    {
                        this.state.experienceitems.map((item, index) => {
                            return(
                                <div className="col-6 col-md-3" key={index}>
                                    <CountUp start={0} end={item.amount_num} delay={0} duration={this.state.delayTimeSec}>
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span className="num" ref={countUpRef} />
                                                <br />
                                                <p className="experience-txt">{item.description}</p>
                                                {
                                                    console.log(setInterval(start, 30000))
                                                }
                                            </div>
                                        )}
                                    </CountUp>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}