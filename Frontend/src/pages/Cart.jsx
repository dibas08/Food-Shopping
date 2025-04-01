import React ,  { useContext} from "react";
import { StoreContext } from "../Context/StoreContext";
import './Cart.css'
import { useNavigate } from "react-router-dom";


function Cart() {


const {cartItems , food_list , removeFromCart ,getTotalCartInput}  = useContext(StoreContext);

const navigate = useNavigate();


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item , index)=>
        {
            if(cartItems[item._id] > 0 )
            {
              return (
                <div>
                    <div className="cart-items-title cart-items-item">
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>${item.price * cartItems[item._id]}</p>
                      <p className="cross" onClick={()=>removeFromCart(item._id)}>x</p>
                    </div>
                    <hr/>
                </div>
              )
            }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2 className="">Cart Totals</h2>
          <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartInput()}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                {getTotalCartInput()==0?0:2}
              </div>
              <hr/>
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartInput()==0?0:getTotalCartInput()+2  }</b>
              </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>if you have a promo code , Enter it here </p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code "></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart