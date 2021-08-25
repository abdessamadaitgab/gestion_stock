import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,Table} from 'react-bootstrap';
import ClientService from '../Services/ClientService';

class ListClients extends Component {
    constructor(props){
        super(props)
        this.state={
            clients: []
        }
        this.AddUser=this.AddUser.bind(this);

    }
    componentDidMount(){
        ClientService.getUsers().then((res) => {
            this.setState({clients:res.data});
        });
    }
    AddUser(){
        this.props.history.push('/add-user')
    }
    editUser(id){
        this.props.history.push(`/update-user/${id}`);
    }
    deleteUser(id){
        ClientService.deleteUser(id).then( res => {
            this.setState({clients: this.state.clients.filter(client => client.id !== id)});
        });
    }
    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }

    render() {
        return (
            <div>
                    <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>  Employees List</Card.Header>
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
                                        <td>
                                        <button onClick={ () => this.editUser(client.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(client.id)} className="btn btn-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(client.id)} className="btn btn-info">View </button>

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