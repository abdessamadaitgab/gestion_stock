import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,Table,ListGroup,Nav} from 'react-bootstrap';
import ClientService from '../Services/ClientService';
import PanierService from '../Services/PanierService';
import authService from "../Services/authService";




class Panier extends Component {
    constructor(props){
        super(props)
        this.state={
            lignes: [],
            currentUser: { username: "" },
            id: this.props.match.params.id,


        }

    }
 
    componentDidMount(){
        const currentUser = authService.getCurrentUser();

      if (!currentUser) this.setState({ redirect: "/home" });
      this.setState({ currentUser: currentUser, userReady: true })
      
        PanierService.getLigneCommandes(this.state.id).then((res) => {
            this.setState({lignes:res.data});
        });
    }
    deleteligne(id){
        PanierService.deleteLigne(id).then( res => {
            this.setState({lignes: this.state.lignes.filter(ligne => ligne.id !== id)});
        });
    }
  
   
  
       
       

    
    render() {
      
  
  
        return (


    
    
    < Card className={"border border-dark bg-dark text-white"}>
    <Card.Header>  Clients List</Card.Header>
<Card.Body>


<div className="row">
   <Table  bordered hover striped variant="dark">
       <thead>
           <tr>
               <th> gamme</th>
               <th>type</th>
               <th>qte</th>
               <th>Prix</th>
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
                       <td> {ligne.qnt* ligne.product.prix} </td>

<td>
<button style={{marginLeft: "10px"}} onClick={ () => this.deleteligne(ligne.id)} className="btn btn-danger">Delete </button>

</td>


                   </tr>
               )
           }
       </tbody>
   </Table> 
   <center>
   <div className="col">
   <button className="btn btn-success" onClick={this.AddUser}> Valider</button>
</div>
</center>

</div>
</  Card.Body>

</Card>
);
}        

}
export default Panier;
