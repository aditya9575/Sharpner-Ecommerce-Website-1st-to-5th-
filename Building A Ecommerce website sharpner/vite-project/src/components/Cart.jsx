import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { myContext } from './GlobalContext';


const Cart = () => {

    const { cart, removeFromCart, totalAmount} = useContext(myContext);


  return (
    <div>
      <h1>CART</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem, index) => (
            <tr key={index}>
              <td><img src={cartItem.imageUrl} alt={cartItem.title} style={{ width: '60px' }} /> {cartItem.title}</td>
              <td>{cartItem.price}</td>
              <td>{cartItem.quantity}</td>
              <td><button style={{background:"red"}} onClick={() => removeFromCart(cartItem)}>Remove Item</button></td> 
            </tr>
          ))}

          <tr>
            <td>Total:{totalAmount}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
