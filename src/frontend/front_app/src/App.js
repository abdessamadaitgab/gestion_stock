import logo from './logo.svg';
import './App.css';
import Footer from './Componments/Footer';
import Header from './Componments/Header';
import ListClients from './Componments/ListClients';
import ViewClient from './Componments/ViewClient';
import UpdateClient from './Componments/UpdateClient';
import CreateClient from './Componments/CreateClient';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import createCommande from './Componments/createCommande';
import ListCommandes from './Componments/ListCommandes';
import BoardAdmin from './Componments/BoardAdmin';
import BoardUser from './Componments/BoardUser';
import Home from './Componments/Home';
import Login from './Componments/Login';
import Profile from './Componments/Profil';
import Register from './Componments/Register';
import eventBus from './common/EventBus';
import React, { Component } from "react";
import {Link } from "react-router-dom";
import authService from './Services/authService';
import ListProduct from './Componments/ListProducts.jsx';
import ListProductCli from './Componments/ListProductsCli';

import Stock from './Componments/Stock'
import UpdateStock from './Componments/UpdateStock'
import ProductDetails from './Componments/ProductDetails';
import Panier from './Componments/Panier';
import PanierCli from './Componments/PanierCli';
import CommandeService from './Services/CommandeService';




class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = authService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
       
      });
      if(user.roles.includes("ROLE_USER")){
        let userx={ };
        console.log('user =>'+JSON.stringify(userx));
        var x= authService.getCurrentUser().id;
        console.log('id => ' + JSON.stringify(x));
        CommandeService.createCommandeUser(userx,x)
        ;  
      }

    }
    
    eventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    eventBus.remove("logout");
  }

  logOut() {
    authService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }
  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

  return (
    <div >
           <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">

Gestion de STOCK          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={ListProductCli} />
            <Route exact path="/admin" component={ListClients} />
            <Route exact path="/admin/users" component={ListClients} />


                      <Route exact path="/admin/commandes" component={ListCommandes}/>


                      <Route exact path="/admin/add-user" component={CreateClient}/>

                      <Route exact  path = "/admin/update-user/:id" component = {UpdateClient}/>
                      <Route exact  path = "/admin/view-user/:id" component = {ViewClient}/>
                      <Route exact  path = "/admin/view-panel/:id" component = {Panier}/>


                      <Route exact  path="/admin/create-commande/:id" component={ListProduct}/>
                      <Route exact  path = "/products" component = {ListProduct}/>
                      <Route exact  path = "/products/:id" component = {ProductDetails}/>
                      <Route exact  path = "/stock" component = {Stock}/>
                      <Route exact  path = "/admin/update-stock/:id" component = {UpdateStock}/>
                      <Route exact  path = "/panier" component = {Panier}/>
                      <Route exact  path = "/panierCli" component = {PanierCli}/>




          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
        <Footer/>
      </div>
    );
  }
}

export default App;
