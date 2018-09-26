import React from 'react';
import { Input, Button, Fa, Modal, ModalBody, ModalFooter } from 'mdbreact';

import './ContactFormComponent.css';

class ContactFormComponent extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  componentDidMount() {
      this.setState({
          modal: this.props.isOpen,
      })
  }
  render() {
    return(
        <Modal isOpen={this.state.modal} toggle={this.props.toggle} className="cascading-modal">
            <div className="modal-header primary-color white-text">
                <h4 className="title">
                    <Fa className="fa fa-pencil" /> Contact form</h4>
                <button type="button" className="close" onClick={this.toggle}>
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <ModalBody className="grey-text">
                <Input size="sm" label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input size="sm" label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
                <Input size="sm" type="textarea" rows="2" label="Your message" icon="pencil"/>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                <Button color="primary">Save changes</Button>
            </ModalFooter>
        </Modal>
    );
  }
};

export default ContactFormComponent;