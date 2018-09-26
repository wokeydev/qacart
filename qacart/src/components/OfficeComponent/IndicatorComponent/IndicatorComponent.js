import React from 'react';

import './IndicatorComponent.css';

export default class IndicatorComponent extends React.Component {
    render() {
        var positionStyle = {
            left: this.props.positionStyle.left,
            top: this.props.positionStyle.top
        }
        return (
            <div className="position-indicator" style={positionStyle}>
                <div className="circle anim-pulse">
                </div>
                <div className="pulse">
                </div>
            </div>
        )
    }
}