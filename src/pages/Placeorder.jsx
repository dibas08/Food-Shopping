import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import './placeorder.css'


function Placeorder() {


  const {getTotalCartInput} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
          <p className='title'>Delivery Information </p>
          <div className="multi-feilds">
            <input type='text' placeholder='First Name' />
            <input type='text' placeholder='Lase Name '/>
          </div>
          <input type='email' placeholder='Email address'/>
          <input type='text' placeholder='Street'/>
          <div className="multi-feilds">
            <input type='text' placeholder='City' />
            <input type='text' placeholder='State'/>
          </div>
          <div className="multi-feilds">
            <input type='text' placeholder='Zip Code' />
            <input type='text' placeholder='Country'/>
          </div>
          <input type='text' placeholder='phone'/>
      </div>

      <div className="place-order-right">
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
          <button >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder