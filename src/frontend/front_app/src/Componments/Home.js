import React, { Component } from "react";
import '../index.css'
import authService from '../Services/authService';




import UserService from "../Services/UserService";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
   

    return (
      <div class="hero">
    <img src="https://i.postimg.cc/4x12v2cB/triangle-top.png" class="triangle1"/>
    <img src="https://i.postimg.cc/WpQyskj6/triangle-left.png" class="triangle2"/>
    <img src="https://i.postimg.cc/MZc4kDkp/circle.png" class="circle"/>
    
    <div class="row">
      <div class="col-1">
        <img src="https://i.postimg.cc/15wjX33x/man.png"/>
        <img src="https://i.postimg.cc/2SYXZN11/elements.png" class="elements"/>
      </div>
      <div class="col-2">
        <h1>SHAH<br/> <span>TISSU</span> SHOP</h1>
        <h3>Bienvenue dans notre monde de Tissu <br/>
        Votre confort est notre priorité , profitez de notre meilleur rapport qualité/prix </h3>
        <br/>
<center>
  {authService.getCurrentUser() &&(
        <a href="/user" class="btn"> Voir nos Tissus</a>
  )
  }
<br/><br/>
{  !authService.getCurrentUser() && (
   <table>
   
     <tr >
     <th> vous n'avez pas de compte ?     </th>
     <th>   </th>
     <th>   se connecter ?    </th>

      </tr>
      <tr>
        <th> <a href="/register" class="btn"> Register</a>  </th>
        <th> </th>
        <th> <a href="/login" class="btn"> Login</a>  </th>
         
     </tr>
     
</table>
)}
</center>

    
      </div>
    </div>
  </div>


    );
  }
}