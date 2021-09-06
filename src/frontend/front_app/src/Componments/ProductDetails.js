import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProduitService from '../Services/ProduitService';
import StockService from '../Services/StockService';
import PanierService from '../Services/PanierService';
import CommandeService from '../Services/CommandeService';
import authService from '../Services/authService';

import {Card,Alert} from 'react-bootstrap'

import img from '../images/Kaschmir.jpg' 
import img2 from '../images/coton.jpg'
import img1 from '../images/mellifa.jpg' 
import imgr1 from '../images/rideaucach.jpg'
import imgr2 from '../images/rideaucot.jpg'
import imgr3 from '../images/rideaumell.jpg'

class ProductDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            product: {},
            stock:{},
            quantite:''
        }
        this.changeQte= this.changeQte.bind(this);
        this.Valider= this.Valider.bind(this);
    }

    componentDidMount(){
        ProduitService.getProductById(this.state.id).then( res => {
            this.setState({product: res.data});
        })
        StockService.getStockById(this.state.id).then( res => {
            this.setState({stock: res.data});
        })

    }

    changeQte= (event) => {
        this.setState({quantite: event.target.value});
        
    }
    Valider=(e)=>{

        e.preventDefault();
       
      if(this.state.quantite > this.state.stock.qte){
          
          alert  ("la quantite est non disponible") 

      }
        
        else{  
           
        PanierService.AjouterLigne(this.state.id,this.state.quantite);
         alert("le produit est ajouté")
         if(authService.getCurrentUser().roles.includes("ROLE_USER")){
            this.props.history.push('/user')
         }
         else{
            this.props.history.push('/products')

         }

        }
    }

    render() {
       if(this.state.id == '1'){
           var aaa=img;
       }
       if(this.state.id == '2'){
        var aaa=img1;
    }
    if(this.state.id == '3'){
        var aaa=img2;
    }
    if(this.state.id == '4'){
        var aaa=imgr3;
    } if(this.state.id == '5'){
        var aaa=imgr2;
    } if(this.state.id == '6'){
        var aaa=imgr1;
    }





        return (
            <div >
                <center>
                  <Card  className="p-3" border="primary" style={{ width: '45rem' }}>
    <Card.Img variant="top" src={aaa} width="200" height="200"/>
    <Card.Body>
      <Card.Title>{ this.state.product.type}
      <br/>
      {this.state.product.gamme}
      
       </Card.Title>
      <Card.Text>
         {this.state.product.prix} DHS
         <br/>
         <p className="text-center text-muted" bgcolor="RED">
          Quantité Dispo En Stock:   <br/>  
         {this.state.stock.qte} m2
         </p>
         <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Entrez la mesure que vous voulez acheter:</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <input placeholder="quantite" name="quantite" className="form-control" 
                                                value={this.state.quantite} onChange={this.changeQte}/>
                                   <button className="btn btn-success" onClick={this.Valider}>Valider</button>

                                        </div>
                                        </form>
                                </div>
                            </div>
                        </div>

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{this.state.product.description}</small>
    </Card.Footer>
  </Card>
  </center>
                
            </div>
        );
    }
}



export default ProductDetails;