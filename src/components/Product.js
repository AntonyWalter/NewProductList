import React from 'react';

const Product =({product,onEdit,onDelete}) =>
{

    return ( <tr >
        <td>{product.productId}</td>
        <td>{product.productName}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td>{product.supplierName}</td>
        <td>{product.productStatus}</td>
        <td>{product.dateLastUpdated}</td>
        <td><button type="button" className="btn btn-success" onClick={()=> onEdit(product)}>Edit</button>   
        <button type="button" className="btn btn-danger" onClick={() => onDelete(product.productId)}>Delete</button>
        </td>
    </tr>)
}

export default Product;