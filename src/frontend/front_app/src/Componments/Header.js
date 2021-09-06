import React, { Component } from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state={

        }

    }


    render() {
        return (
            <div>
                <header>
                <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">          gestion de stock</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/users">Home</Nav.Link>
      <Nav.Link href="/commandes">Commandes</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
   </Navbar>
  <br />



                </header>

            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;