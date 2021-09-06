import React, { Component } from 'react';
import ClientService from '../Services/ClientService';


class CreateClient extends Component {
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
         this.saveUser= this.saveUser.bind(this);
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
    saveUser=(e)=>{

        e.preventDefault();
        let user={ nom:this.state.nom, prenom:this.state.prenom, mobile:this.state.mobile};
        console.log('user =>'+JSON.stringify(user));
        ClientService.createUser(user).then(res=>{
            this.props.history.push('/users');
        });
    }
    cancel(){
        this.props.history.push('/users')
    }

    render() {
        return (
            <div>
                  <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">create User</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nom: </label>
                                            <input placeholder="Nom" name="Nom" className="form-control" 
                                                value={this.state.nom} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Prenom: </label>
                                            <input placeholder="Prenom" name="Prenom" className="form-control" 
                                                value={this.state.prenom} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Mobile: </label>
                                            <input placeholder=" Mobile" name="Mobile" className="form-control" 
                                                value={this.state.mobile} onChange={this.changeMobileHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                
                
            </div>
        );
    }
}

export default CreateClient;