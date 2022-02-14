import React from 'react';

function ProductsLists({products, setProductSetails}) {

    return (
      <>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Description </th>
                        <th> Prce </th>
                        <th> Category </th>
                        <th> View Details </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map( (product, index)=>
                        <tr key={index}>
                            <td> {product.name } </td>
                            <td> {product.description } </td>
                            <td> {product.price } </td>
                            <td> {product.category } </td>
                                <td> <button className='btn btn-primary' onClick={()=> setProductSetails(product)}> Click to view</button> </td>
                        </tr>
                        ) 
                    }
                </tbody>
            </table> 
      </>
  )
}

export default ProductsLists