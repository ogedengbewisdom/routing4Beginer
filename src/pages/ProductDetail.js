import { Fragment } from "react"
import { useParams, Link } from "react-router-dom"


const ProductDetail = () => {
    carams()
    return(
        <Fragment>
            <h2>Product Detail Page</h2>
            <p>{params.productId}</p>
            <p><Link to={".."} relative='path'>Back</Link></p>
        </Fragment>
    )
}

export default ProductDetail