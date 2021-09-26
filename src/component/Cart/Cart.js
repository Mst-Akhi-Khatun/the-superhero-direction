import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    const total = cart.reduce((prevSalary,currSalary) => prevSalary + currSalary.salary, 0)

    return (
        <div className="cart">
            <h4>Selected Singer: {cart.length}</h4>
            <h5>Total: {total}</h5>
            <ul>
                {
                    cart.map(item =><li>{item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;