import React, { Component } from 'react';
import ClientService from '../Services/ClientService';


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
                 <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Client Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> nom du client: </label>
                            <div> { this.state.client.nom }</div>
                        </div>
                        <div className = "row">
                            <label> prenom du client: </label>
                            <div> { this.state.client.prenom }</div>
                        </div>
                        <div className = "row">
                            <label> mobile: </label>
                            <div> { this.state.client.mobile }</div>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default ViewClient;