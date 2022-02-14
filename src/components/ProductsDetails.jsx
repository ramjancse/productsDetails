import React from 'react';

function ProductsDetails({selectProduct, setProductSetails}) {
  return (
    <>
      <div class="row justify-content-center">
        <div class="col-md-6">
        <h1 className='justify-content-center'> Details of {selectProduct.name } </h1>
        <table class="table table-striped">
            <tbody>
            <tr>
              <th> Name </th>
              <td> {selectProduct.name } </td>
            </tr>
            <tr>
              <th> Description </th>
              <td> {selectProduct.description } </td>
            </tr>
            <tr>
              <th> Price </th>
              <td> {selectProduct.price } </td>
          </tr>
            <tr>
              <th> Category </th>
              <td> {selectProduct.category } </td>
          </tr>
            </tbody>
        </table>
          
         
          <p> <button className='btn btn-primary' onClick={()=>setProductSetails(null)}> View List </button> </p>
        </div>
      </div>
    </>
  )
}

export default ProductsDetails