import React, { Component } from 'react';
import {Card,Table,ListGroup,Nav,Grid,Row,Col, Button,CardGroup} from 'react-bootstrap';
import ProduitService from '../Services/ProduitService';
import PanierService from '../Services/PanierService';

import img from '../images/Kaschmir.jpg' 
import img2 from '../images/coton.jpg'
import img1 from '../images/mellifa.jpg' 
import imgr1 from '../images/rideaucach.jpg'
import imgr2 from '../images/rideaucot.jpg'
import imgr3 from '../images/rideaumell.jpg'
import authService from "../Services/authService";
import StockService from '../Services/StockService';



class ListClients extends Component {
    constructor(props){
        super(props)
        this.state={
            productsTissu: [[]],
            productsRideau: [[]],
            id: this.props.match.params.id,
           panier:[],
           qqq: [],
        
           currentUser: { username: "" }
           
        

        }

    }
    
 
    componentDidMount(){
        ProduitService.getAllProductsTissu().then((res) => {
            this.setState({productsTissu:res.data});
        });
        ProduitService.getAllProductsRideau().then((res) => {
            this.setState({productsRideau:res.data});
        });
        ProduitService.getQteStocke("1").then((res) => {
          this.setState({qqq:res.data});
      });
      const currentUser = authService.getCurrentUser();

      if (!currentUser) this.setState({ redirect: "/home" });
      this.setState({ currentUser: currentUser, userReady: true })
      
        
    }
    AjouterPanier(id){
      this.props.history.push(`/products/${id}`);
      /*  var qt=prompt("enter la quantite");
        
        
       if(qt<= ProduitService.getQteStocke(id)){
        PanierService.AjouterLigne(id,qt);
        }
        else{
          alert("la quantite est non disponible");
        }
       

       var test=prompt(this.state.qqq.length);*/
        

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
<center>
<h1 className="text-center text-muted">
    PRODUCTS TISSU
</h1>
</center>
<CardGroup>
<Card>
<Card.Img src={img} size="300" height="300" />
</Card>
<Card>
<Card.Img src={img1} size="300" height="300"  />
</Card>
<Card>
<Card.Img src={img2} size="300" height="300"  />
</Card>
</CardGroup>

<CardGroup>
{
                                this.state.productsTissu.map(
                                    product =>
  <Card key={product.id} border="dark">
    <Card.Body>
      <Card.Title>{product.type}</Card.Title>
      <Card.Text>
      {product.gamme}
      <br/>
      {product.prix} DHS
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">   <button  className="btn btn-info"onClick={ () => this.AjouterPanier(product.id)}>ACHETER </button>
</small>
    </Card.Footer>
  </Card>
                                )}             
 
</CardGroup>
<hr/>
<center>
<h1 className="text-center text-muted">
    PRODUCTS RIDEAU
</h1>
</center>

<CardGroup>
<Card>
<Card.Img src={imgr3} size="300" height="300" />
</Card>
<Card>
<Card.Img src={imgr2} size="300" height="300"  />
</Card>
<Card>
<Card.Img src={imgr1} size="300" height="300"  />
</Card>
</CardGroup>

<CardGroup>
{
                                this.state.productsRideau.map(
                                    product =>
  <Card key={product.id} border="dark">
    <Card.Body>
      <Card.Title>{product.type}</Card.Title>
      <Card.Text>
      {product.gamme}
      <br/>
      {product.prix} DHS
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">   <button  className="btn btn-info" onClick={ () => this.AjouterPanier(product.id)}>ACHETER </button>
</small>
    </Card.Footer>
  </Card>
                                )}             
 
</CardGroup>
<br/>
<br/>
<br/>

 </div>
  );
    }        
    
}



export default ListClients;