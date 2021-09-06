import React, { Component } from 'react';
import ClientService from '../Services/ClientService';
import StockService from '../Services/StockService';


class UpdateClient extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            qte: '',
            
        }
        this.changeQte= this.changeQte.bind(this);
       
         this.updateStock= this.updateStock.bind(this);
    }
    componentDidMount(){
        StockService.getStockById(this.state.id).then( (res) =>{
            let stock = res.data;
            this.setState({qte:stock.qte
            });
        });
    }
    updateStock = (e) => {
        e.preventDefault();
        let qqte = {qte: this.state.qte};

        console.log( JSON.stringify(qqte));
        console.log('id => ' + JSON.stringify(this.state.id));
        
        StockService.updateStock(qqte, this.state.id).then( res => {
            this.props.history.push('/stock');
        });
    }
    changeQte= (event) => {
        this.setState({qte: event.target.value});
    }


    cancel(){
        this.props.history.push('/stock');
    }
    render() {
        return (
            <div>
                 <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Stock</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Qte: </label>
                                            <input placeholder="Qte" name="Qte" className="form-control" 
                                                value={this.state.qte} onChange={this.changeQte}/>
                                        </div>
        

                                        <button className="btn btn-success" onClick={this.updateStock}>Save</button>
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

export default UpdateClient;