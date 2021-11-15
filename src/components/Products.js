import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

export class Products extends Component {
    state={proData:[]};
    componentDidMount(){
        fetch(" http://localhost:3008/products")
        .then(res=>res.json())
        .then(data=>{
            this.setState({proData:data})
        })
    }
    render() {
        return (
            <div>
                <h1>Products</h1>
                <div className="row">
                {this.state.proData.map(pro=>
                        <div className="col-sm-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top"  height="200px" src={`./images/${pro.image}`} />
                                <Card.Body>
                                    <Card.Title>{pro.pname}</Card.Title>
                                    <Card.Text>
                                    Price:{pro.price} <br />
                                    Quantity:{pro.quantity}
                                    </Card.Text>
                                    <Button variant="dark"><Link to={`/productsdetails/${pro.id}`}>Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </div>
                        
                    )}
                </div>
            </div>
        )
    }
}

export default Products
