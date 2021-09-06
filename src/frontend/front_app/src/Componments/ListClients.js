import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,Table,ListGroup,Nav} from 'react-bootstrap';
import ClientService from '../Services/ClientService';
import CommandeService from '../Services/CommandeService';


class ListClients extends Component {
    constructor(props){
        super(props)
        this.state={
            clients: [],
        }
        this.AddUser=this.AddUser.bind(this);

    }
 
    componentDidMount(){
        ClientService.getUsers().then((res) => {
            this.setState({clients:res.data});
        });
    }
    AddUser(){
        this.props.history.push('/admin/add-user')
    }
    editUser(id){
        this.props.history.push(`/admin/update-user/${id}`);
    }
    deleteUser(id){
        ClientService.deleteUser(id).then( res => {
            this.setState({clients: this.state.clients.filter(client => client.id !== id)});
        });
    }
    viewUser(id){
        this.props.history.push(`/admin/view-user/${id}`);
    }
    viewPanel(id){
        this.props.history.push(`/admin/view-panel/${id}`);

            

    }
    createCommande(id){
        let user={ };
        console.log('user =>'+JSON.stringify(user));
        console.log('id => ' + JSON.stringify(id));
        CommandeService.createCommandeUser(user,id).then(res=>{
            this.props.history.push('/products');
        });
       
       

    }


    render() {
        return (
            <div>
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
              
             
<Card className={"border border-dark bg-dark text-white"}>
<Card.Header>  Clients List</Card.Header>
                <Card.Body>

                <div className="col">
                    <button className="btn btn-primary" onClick={this.AddUser}> Add User</button>
                </div>
                <div className="row">
                    <Table  bordered hover striped variant="dark">
                        <thead>
                            <tr>
                                <th> nom</th>
                                <th>prenom</th>
                                <th>mobile</th>
                                <th>email</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.clients.map(
                                    client =>
                                    <tr key ={client.id}>
                                        <td> {client.nom} </td>
                                        <td> {client.prenom} </td>
                                        <td> {client.mobile} </td>
                                        <td>{client.email}</td>
                                        <td>
                                        <button onClick={ () => this.editUser(client.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(client.id)} className="btn btn-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(client.id)} className="btn btn-secondary">View </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.createCommande(client.id)} className="btn btn-light">CreateCommande </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewPanel(client.id)} className="btn btn-light">ViewPenel </button>

                                        </td>



                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
</div>
</Card.Body>

</Card>
                </div>

                
        );
    }
}



export default ListClients;