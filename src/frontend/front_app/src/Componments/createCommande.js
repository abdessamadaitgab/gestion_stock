import React, { Component } from 'react';
import CommandeService from '../Services/CommandeService';
import { useParams } from 'react-router-dom';

class createCommande extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
          
        }
        this.saveCommande= this.saveCommande.bind(this);

    }
    saveCommande=(e)=>{

        e.preventDefault();
        let user={ };
        console.log('user =>'+JSON.stringify(user));
        console.log('id => ' + JSON.stringify(this.state.id));
        CommandeService.createCommandeUser(user,this.state.id).then(res=>{
            this.props.history.push('/users');
        });
       
        ;
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.id}

                </h1>
             <form>
             <button className="btn btn-success" onClick={this.saveCommande}>Save</button>

            </form>

                
            </div>
        );
    }
}

export default createCommande;