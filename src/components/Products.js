import React from 'react';
import Product from './Product'

class Products extends React.Component {
    render() { 
        const numberFormat = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          });
          
        return (
            <ul className="products" alt = "true">
                {this.props.listProducts.map(element => {
                    return (
                        <Product 
                            image = {element.image} 
                            productName = {element.productName}
                            description = {element.description}
                            quantity = {element.quantity}
                            price = {numberFormat.format(element.price)}
                            vat = {element.vat}
                        /> 
                    )
                })}
            </ul>
        )
    }
}
 
export default Products;