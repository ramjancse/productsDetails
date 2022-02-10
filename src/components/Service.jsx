import React, { useEffect, useState } from 'react';
import '../index.css';
import Loader from './Loader';

const services = {
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

console.log(services);





function Service() {
    const [loader, setloader] = useState(1);
    const [vissible, setVisible ] = useState('hidden')
    const [product, setProduct] = useState({
        name: "",
        price: '',
        category: "",
    })

    useEffect( () => {
      
        setTimeout(() => {
            setloader(0)
            setVisible('visible')
        }, 1000);
    }, []); 

    const handleClick = (PRODUCT) => {
        setProduct({
            name: PRODUCT.name,
            price: PRODUCT.price,
            category: PRODUCT.category,
        })  
    }
    
    return <div>
        {
            loader ? <Loader /> : 
                
            services.PRODUCTS.map((PRODUCT, index) =>      
            <button key={PRODUCT.id} onClick={ ()=> handleClick(PRODUCT) }>
                {PRODUCT.name}
            </button>   
            )               
        }
        
        <div style={{visibility: vissible}}>
          <h1> Name: { product.name} </h1>
          <h1> Price: { product.price} </h1>
          <h1> Category: { product.category} </h1>
        </div>
        
  </div>;
}


export default Service;
