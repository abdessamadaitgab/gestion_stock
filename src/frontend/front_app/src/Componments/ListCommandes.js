import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,Table,Nav} from 'react-bootstrap';
import CommandeService from '../Services/CommandeService';
class ListCommandes extends Component {
    constructor(props){
        super(props)
        this.state={
            commandes: []
        }
    } 
    componentDidMount(){
        CommandeService.getCommandes().then((res) => {
            this.setState({commandes:res.data});
        });
    } 
    deleteCommande(id){
        CommandeService.deleteCommande(id).then( res => {
            this.setState({commandes: this.state.commandes.filter(commande => commande.id !== id)});
        });
    }
    render() {
        return (
            <div>
                 <br/>
                <br/>                <br/> <br/>

                                   <div className="col">

<Nav justify variant="tabs" defaultActiveKey="/home">
<Nav.Item>
<Nav.Link href="/admin/users">Espace users</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link href="/admin/commandes">Espace Commandes</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link href="/products">Espace Produis</Nav.Link>

  </Nav.Item>
  <Nav.Item>
  <Nav.Link href="/stock">Espace Stock</Nav.Link>
</Nav.Item>
</Nav>
</div>
                  <Card className={"border border-dark bg-dark text-white"} style={{ width: '70rem' }}>
                <Card.Header>  <center><h1>Commande List</h1></center> </Card.Header>
                <Card.Body>

                    <Table  bordered hover striped variant="dark">
                        <thead>
                            <tr>
                                <th> date</th>
                                <th>nom d'utilisateur</th>
                                <th>prenom d'utilisateur</th>
                                <th>mobile </th>
                                <th>email </th>

                                <th>Actions</th>

                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.commandes.map(
                                    commande =>
                                    <tr key ={commande.id}>
                                        <td> {commande.date} </td>

                                        <td> {commande.user.nom} </td>
                                        <td>
                                        {commande.user.prenom} 
                                        </td>
                                        <td>{commande.user.mobile}</td>
                                        <td>
                                        {commande.user.email} 
                                        </td>
                                        <td>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCommande(commande.id)} className="btn btn-danger">Delete </button>

                                        </td>



                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>

                </Card.Body>

                </Card>
                

                
            </div>
        );
    }
}

export default ListCommandes;