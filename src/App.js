import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductsDetails from './components/ProductsDetails'
import ProductsLists from './components/ProductsLists'
import Spinner from './components/Spinner'

function App() {
  const [selectProduct, setSelectProduct] = useState(null)
  const [showLoader, setShowLoader ] = useState(true)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Footaball',
      description: 'description 1',
      price: 100,
      category : 'Sports'
    },
    {
      id: 2,
      name: 'Cricketball',
      description: 'description 2',
      price: 300,
      category : 'Sports'
    },
    {
      id: 3,
      name: 'T-Shirt',
      description: 'description 3',
      price: 100,
      category : 'Sports'
    },
    {
      id: 4,
      name: 'Mobile',
      description: 'description 4',
      price: 45000,
      category : 'Electronic'
    },
    {
      id: 5,
      name: 'Laptop',
      description: 'description 5',
      price: 75000,
      category : 'Electronic'
    },
    {
      id: 6,
      name: 'Jeans',
      description: 'description 6',
      price: 5000,
      category : 'Cloth'
    },
    {
      id: 7,
      name: 'KIng size bed',
      description: 'description 7',
      price: 35000,
      category : 'Furniture'
    },
  ]
  )

  const setProductSetails = (product)=> {
    changeLoader(true) 
    setTimeout(() => {
      setSelectProduct(product)
      changeLoader(false)
    }, 500);
          
         
  }

const changeLoader = (show) => {
      setShowLoader(show)
  
}

  useEffect(() => {
    setTimeout(() => {
    changeLoader(false) 
    }, 500);
  },[])

  return (
    <div className='container'>
      <Navbar />
      {
        showLoader && <Spinner />
      }
      
      {
        selectProduct === null ?
        <ProductsLists products={products} setProductSetails={setProductSetails} /> :
        <ProductsDetails selectProduct={selectProduct} setProductSetails={ setProductSetails }/>
      }
     
     
    </div>
  )
}

export default App