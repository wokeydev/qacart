import React from 'react';

export default class ServicePage extends React.Component {
    render() {
        return (
            <div>
                Service Page: {this.props.match.params.serviceName}
            </div>
        )
    }
}