import React, { Component } from 'react';
import Details from './Details';
 

export default class Products extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
           PRODUCTS : [
                {
                    id : 1, 
                    name: "Football",
                    price: 1500,
                    category: "Sports",
                },
                {
                    id : 2,
                    name: "Mobile Phone",
                    price: 2500,
                    category: "Electronics",
                },
                {
                    id : 3,
                    name: "Laptop",
                    price: 35500,
                    category: "Electronics Device",
                }
              ]
        }
    }
    handleClick(product) {
        
        console.log(product);
        <Details name={product.name}/>
        
    }

    render() {
      return <div>
        {
              this.state.PRODUCTS.map((product, index) => 
                  <a onClick={ this.handleClick.bind(this, product) } >
                      <p key={product.id}> Name : {product.name}  Price : {product.price} </p>
                     
                  </a>
            )   
        }   
    </div>;
  }
}
