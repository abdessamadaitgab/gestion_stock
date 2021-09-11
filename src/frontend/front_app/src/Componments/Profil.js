import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import authService from "../Services/authService";
import Card from 'react-bootstrap/Card'
import img from '../images/profil.jpeg'


export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = authService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
               <center>
        <Card
    bg="LIGHT"
    
    text="LIGHT"
    style={{ width: '40rem' }}
    className="mb-2"
  >
          <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{ currentUser.username}</Card.Title>
      <Card.Text>
      { currentUser.email}
      <br/>
      {currentUser.name}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 1 mins ago</small>
    </Card.Footer>

      </Card>
      </center>
      </div>
    );
  }
}