import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import links from '../../config/links';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => this.setState({
    isOpen: !this.state.isOpen
  });

  render() {
    return (
      <ReactstrapNavbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">Todo's</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href={links.profile.link} target="_blunk">
                  {links.profile.title}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={links.source.link} target="_blunk">
                  {links.source.title}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </ReactstrapNavbar>
    );
  }
}

export default Navbar;
