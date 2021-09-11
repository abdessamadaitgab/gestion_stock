import React, { Component } from 'react';
import ClientService from '../Services/ClientService';
import {Card,Table,ListGroup,Nav} from 'react-bootstrap';



class UpdateClient extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nom: '',
            prenom: '',
            mobile: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
         this.updateUser = this.updateUser.bind(this);
    }
    componentDidMount(){
        ClientService.getUserById(this.state.id).then( (res) =>{
            let user = res.data;
            this.setState({nom: user.nom,
                prenom: user.prenom,
                mobile : user.mobile
            });
        });
    }
    updateUser = (e) => {
        e.preventDefault();
        let user = {nom: this.state.nom, prenom: this.state.prenom, mobile: this.state.mobile};
        console.log('user => ' + JSON.stringify(user));
        console.log('id => ' + JSON.stringify(this.state.id));
        
        ClientService.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/admin');
        });
    }
    changeFirstNameHandler= (event) => {
        this.setState({prenom: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({nom: event.target.value});
    }

    changeMobileHandler= (event) => {
        this.setState({mobile: event.target.value});
    }

    cancel(){
        this.props.history.push('/admin');
    }
    render() {
        return (
            <div>
                 <br></br>
                   <div className = "container">
                        <div className = "row">
                        < Card className={"border border-dark bg-dark text-white"} style={{ width: '30rem' , height:'50rem' }}>
                                <h3 className="text-center">Update User</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nom: </label><br/><br/>
                                            <input placeholder="Nom" name="Nom" className="form-control" 
                                                value={this.state.nom} onChange={this.changeLastNameHandler}/><br/><br/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Prenom: </label><br/><br/>
                                            <input placeholder="Prenom" name="Prenom" className="form-control" 
                                                value={this.state.prenom} onChange={this.changeFirstNameHandler}/><br/><br/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Mobile: </label><br/><br/>
                                            <input placeholder=" Mobile" name="Mobile" className="form-control" 
                                                value={this.state.mobile} onChange={this.changeMobileHandler}/><br/><br/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </Card>
                        </div>

                   </div>
                
            </div>
        );
    }
}

export default UpdateClient;