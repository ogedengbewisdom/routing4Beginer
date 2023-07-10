
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

 function Products() {

    const PRODUCTS = [
        {id: "p1", title: "Product 1"},
        {id: "p2", title: "Product 2"},
        {id: "p3", title: "Product 3"},
    ]
  return (
    <Fragment>
       <div>PRODUCTS</div>
       <ul>
        {PRODUCTS.map(item => <li key={item.id}><Link to={`${item.id}`}>{item.title}</Link></li>)}
       </ul>
       
    </Fragment>
  )
}

export default Products
