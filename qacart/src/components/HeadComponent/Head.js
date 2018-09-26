import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Input, Button, Fa, Modal, ModalBody, ModalFooter } from 'mdbreact';

import './Head.css';
export default class Head extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.loadLinks = this.loadLinks.bind(this);
    this.state = {
      collapsed: true,
      isModalOpen: false,
      menus: []
    };

  }
  componentDidMount() {
    this.loadLinks();
  }
  loadLinks () {
    fetch('http://localhost:4000/api/menus')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            menus: [...this.state.menus, ...result]
          })
        })    
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  render() {
    let contactElement;
    this.state.collapsed ? 
    ( contactElement = (<div className="contactus" onClick={this.toggleModal}>
                          <div>
                            <a>Contact Us</a>
                          </div>
                          <img src="./image/ContactUs.png" alt="cotact us" />
                        </div>)) : 
    ( contactElement = (<NavItem>
                          <NavLink onClick={this.toggleModal} >Contact Us</NavLink>
                        </NavItem>
    ))
    
    return (
      <div className="header-div">
        <Navbar color="" light expand="lg">
          <NavbarBrand href="/">
              <img className="logoImage" src="./image/logo.png" alt="Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav className="ml-auto" navbar>
                {
                  this.state.menus.map((item, index) => {
                    return (
                      <NavItem key={index}>
                        <NavLink to={item.linkUrl} href={item.linkUrl}>{item.name}</NavLink>
                      </NavItem>
                    )
                  })
                }
              </Nav>
              {contactElement}
          </Collapse>
        </Navbar>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="cascading-modal">
            <div className="modal-header primary-color white-text">
                <h4 className="title">
                    <Fa className="fa fa-pencil" /> Contact Us</h4>
                <button type="button" className="close" onClick={this.toggleModal}>
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <ModalBody className="grey-text">
                <Input size="sm" label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input size="sm" label="Phone Number" icon="phone" group type="text" validate error="wrong" success="right"/>
                <Input size="sm" type="textarea" rows="2" label="Your message" icon="pencil"/>
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Send Message</Button>
            </ModalFooter>
        </Modal>
      </div>
    );
  }
}