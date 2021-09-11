import React, { Component } from 'react';
import ClientService from '../Services/ClientService';
import StockService from '../Services/StockService';

import {Card,Table,ListGroup,Nav} from 'react-bootstrap';


class UpdateClient extends Component {
    constructor(props) {
        super(props)

        this.state = {
          stocks:[]
        }
      
    }
    componentDidMount(){
        StockService.getAllStock().then( (res) =>{
            this.setState({stocks:res.data});
           
        });
    }
    editStock(id){
        this.props.history.push(`/admin/update-stock/${id}`);
    }
 

    render() {
        return (
            <div>
                 <br/>                <br/> <br/>

                <br/>
             
                                <div className="col">

                                <Nav justify variant="tabs" defaultActiveKey="/home" fixed>
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
                <Card.Header>  <center><h1>Stock List</h1></center> </Card.Header>
                <Card.Body>
                    <div className="row">
                    <Table  bordered hover striped variant="dark" size="500">
                        <thead>
                            <tr>
                                <th> type</th>
                                <th>Gamme</th>
                                <th>Quantite</th>
                                <th>Actions</th>

                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.stocks.map(
                                    stock =>
                                    <tr key ={stock.id}>
                                        <td> {stock.product.gamme} </td>

                                        <td> {stock.product.type} </td>
                                        <td>
                                            
                                        {stock.qte} 
                                        </td>
                                        <td>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.editStock(stock.id)} className="btn btn-info">Update </button>

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

export default UpdateClient;