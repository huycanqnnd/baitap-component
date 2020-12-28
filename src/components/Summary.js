import React, {Component} from 'react';
class Summary extends Component {
    render() { 
        let itemMonney = 0;
        let totalMonney = 0;
        let grandMonney = 0;
        let totalTax = 0;

        this.props.listProducts.map(function(item){
            itemMonney = (item.price * item.quantity);
            totalMonney += itemMonney;
            totalTax += itemMonney * item.vat / 100;
            grandMonney += itemMonney + itemMonney * item.vat / 100;
        });

        const numberFormat = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

        return (
            <div className="summary" alt = "true">
                <ul alt = "true">
                    <li alt = "true">Subtotal: <span>{numberFormat.format(totalMonney)}</span></li>
                    <li alt = "true">Tax: <span>{numberFormat.format(totalTax)}</span></li>
                    <li alt = "true">Total: <span>{numberFormat.format(grandMonney)}</span></li>
                </ul>
            </div>
        );
    }
}
 
export default Summary;