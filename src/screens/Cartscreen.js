import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../actions/cartActions';

export default function Cartscreen() {
  const cartItems = useSelector((state) => state.cartReducer.cartItems) || [];
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);
  const userLogin = useSelector((state) => state.loginUserReducer);

  useEffect(() => {
    if (!userLogin.currentUser) {
      window.location.href = '/login'; // Redirect to login page
    }
  }, [userLogin]);

  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (x, item) => x + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
  }, [cartItems]);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: '40px' }}>My Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="flex-container">
                <div className="text-left m-1 w-100">
                  <h1>{item.name}</h1>
                  {/* <h1>
                    Price: {item.quantity} * {item.prices[0][item.varient]} ={' '}
                    {item.quantity * item.prices[0][item.varient]}
                  </h1> */}
                  <h1 style={{ display: 'inline' }}>Quantity: </h1>
                  <button
                    className="btn btn-sm btn-success mx-2"
                    onClick={() => dispatch(increaseQuantity(item._id))}
                  >
                    +
                  </button>
                  <b>{item.quantity}</b>
                  <button
                    className="btn btn-sm btn-success mx-2"
                    onClick={() => dispatch(decreaseQuantity(item._id))}
                  >
                    -
                  </button>
                  <div>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => dispatch(removeFromCart(item._id))}
                    >
                      Remove
                    </button>
                  </div>
                  <hr />
                </div>
                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    style={{ height: '80px', width: '80px' }}
                    alt={item.name}
                  />
                </div>
              </div>
            ))
          )}
        </div>
        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: '40px' }}>Subtotal: Rs. {subtotal}</h2>
          <button className="btn">Check Out</button>
        </div>
      </div>
    </div>
  );
}
