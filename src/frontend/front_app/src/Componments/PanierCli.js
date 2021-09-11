import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,Table,ListGroup,Nav} from 'react-bootstrap';
import ClientService from '../Services/ClientService';
import PanierService from '../Services/PanierService';
import authService from "../Services/authService";
import { Prompt } from 'react-router-dom';
import { faVrCardboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




class PanierCli extends Component {
    constructor(props){
        super(props)
        this.state={
            lignes: [],
            currentUser: { username: "" },


        }

    }
 
    componentDidMount(){
        const currentUser = authService.getCurrentUser();

      if (!currentUser) this.setState({ redirect: "/home" });
      this.setState({ currentUser: currentUser, userReady: true })
      
        PanierService.getLigneCommandes(authService.getCurrentUser().id).then((res) => {
            this.setState({lignes:res.data});
        });
    }
    deleteligne(id){
        PanierService.deleteLigne(id).then( res => {
            this.setState({lignes: this.state.lignes.filter(ligne => ligne.id !== id)});
        });
    }
    valider(id){
        let panier={};
        PanierService.validerPanier(id);

    }
   
   
  
       
       

    
    render() {
      
  
  
        return (
            
<div>
<br/>                <br/> <br/>

                <br/>
<div className="col">

<Nav justify variant="tabs" defaultActiveKey="/home">
<Nav.Item>
<Nav.Link href="/user" >Espace Produits</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link href="/panierCli">Consulter Panier</Nav.Link>
</Nav.Item>
</Nav>      
</div>   
<br/>
    
    
    < Card className={"border border-dark bg-dark text-white"} style={{ width: '70rem' , height:'50rem' }}>
    <Card.Header> <h1><FontAwesomeIcon icon={faVrCardboard}/>Panier List </h1></Card.Header>
<Card.Body>

<br/>
<div className="row">


   <Table  bordered hover striped variant="dark">
       <thead>
           <tr>
               <th> gamme</th>
               <th>type</th>
               <th>qte</th>
               <th>Prix Unit</th>
               <th>Prix total</th>

               <th>Actions</th>
           </tr>

       </thead>
       <tbody>
           {
               this.state.lignes.map(
                   ligne =>
                   <tr key ={ligne.id}>
                       <td> {ligne.product.gamme} </td>
                       <td> {ligne.product.type} </td>
                       <td> {ligne.qnt} </td>

                       <td>{ligne.product.prix}</td>
                       <td> {ligne.qnt* ligne.product.prix} </td>

                       <td>
                       <button style={{marginLeft: "10px"}} onClick={ () => this.deleteligne(ligne.id)} className="btn btn-danger">Delete </button>

                       </td>



                   </tr>
               )
           }
       </tbody>
   </Table> 
   </div>
   <center>
   <div className="col">
</div>
</center>

</  Card.Body>

</Card>
</div>
);
}        

}
export default PanierCli;
