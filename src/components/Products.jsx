import React, { Component } from 'react';
import Loader from './Loader';

export default class Products extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            view: {
                name: '',
                price: '',
                category: "",
            },
            visible:'hidden',
            loader : true,
            PRODUCTS: [
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
    
    componentDidMount() {
        console.log('component mounteed');
        setTimeout(() => {
            console.log('component mounted after 1 sec');
            this.setState({
                visible: 'visible'
            })
            this.setState({
                loader : false,
            })
        }, 1000);
     }

    handleClick(PRODUCT) {
        this.setState({
            view: {
                name: PRODUCT.name,
                price: PRODUCT.price,
                category: PRODUCT.category
            }
        })
        
    }

    render() {
         
        return <div>
        {
            this.state.loader ? <Loader />:
            this.state.PRODUCTS.map((PRODUCT, index) =>  
            <button onClick={ ()=> this.handleClick(PRODUCT)} key={PRODUCT.id}>
              {PRODUCT.name}
            </button> )   
        } 
            <div style={{visibility: this.state.visible}}>
                <h1> Name : {this.state.view.name } </h1>
                <h1> Price : {this.state.view.price } </h1>
                <h1> Category : {this.state.view.category } </h1>
            </div>    
    </div>;
  }
}
