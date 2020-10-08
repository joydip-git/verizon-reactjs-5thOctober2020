import React from 'react'
import PropTypes from 'prop-types'
import './ProductRow.css'
import { Link } from 'react-router-dom'

function ProductRow({ product, remove }) {
    return (
        <tr>
            <td>
                <Link to={{
                    pathname: `/products/${product.productId}`
                }}>
                    <div className='img-responsive'>
                        <img
                            src={product.imageUrl}
                            alt='NA'
                            title={product.productName}
                            className='imgStyle'
                        />
                    </div>
                </Link>
            </td>
            <td>{product.productName}</td>
            <td>{product.productCode}</td>
            <td>{product.price}</td>
            <td>{product.starRating}</td>
            <td>
                <button className='btn btn-primary'>Update</button>
            </td>
            <td>
                <button className='btn btn-danger' onClick={() => remove(product.productId)}>Delete</button>
            </td>
        </tr>
    )
}

ProductRow.propTypes = {
    product: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired
}

export default ProductRow

