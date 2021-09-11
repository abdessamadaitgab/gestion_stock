import React, { Component } from 'react';
import ClientService from '../Services/ClientService';
import {Card,Table,ListGroup,Nav} from 'react-bootstrap';



class ViewClient extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            client: {}
        }
    }

    componentDidMount(){
        ClientService.getUserById(this.state.id).then( res => {
            this.setState({client: res.data});
        })
    }
    render() {
        return (
            <div>
                 <br></br>                <br/> <br/>

                 < Card className={"border border-dark bg-dark text-white"} style={{ width: '30rem' , height:'50rem' }}>
                   <br/>
                    <h3 className = "text-center"> View Client Details</h3>
                    <div className = "card-body">
                        <center>
                        <div className = "row">
                            <label> <font color="gold" size="10pt">nom du client: </font> </label>
                            <div> { this.state.client.nom }</div>
                        </div>
                        <div className = "row">
                            <label > <font color="gold" size="10pt">prenom du client:</font> </label>
                            <div> { this.state.client.prenom }</div>
                        </div>
                        <div className = "row">
                            <label> <font color="gold" size="10pt">mobile: </font> </label>
                            <div> { this.state.client.mobile }</div>
                        </div>
                        <div className = "row">
                            <label> <font color="gold" size="10pt">email:</font>  </label>
                            <div> { this.state.client.email }</div>
                        </div>
                        <div className = "row">
                            <label> <font color="gold" size="10pt">username: </font> </label>
                            <div> { this.state.client.username }</div>
                        </div>
                        </center>
                    </div>

                </Card>
                
            </div>
        );
    }
}

export default ViewClient;