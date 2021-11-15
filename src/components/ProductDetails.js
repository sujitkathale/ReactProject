import React, { Component } from 'react'

export class ProductDetails extends Component {
    state={id:this.props.match.params.id, proData:''}
    componentDidMount(){
        fetch(" http://localhost:3008/products/"+this.state.id)
        .then(res=>res.json())
        .then(data=>{
            this.setState({proData:data})
        })
    }
    render() {
        return (
            <div>
                <h2>ProductDeatails {this.state.proData.id}</h2>
                <p>Product Name: {this.state.proData.pname}</p>
                <p>Product Price: {this.state.proData.price}</p>
                <p>Product Quantity: {this.state.proData.quantity}</p>
            </div>
        )
    }
}

export default ProductDetails
