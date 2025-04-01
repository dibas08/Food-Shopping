import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>
{

    const [cartItems , setCartItems] = useState({});
    const addToCart = (itemId)=>
    {
        if (!cartItems[itemId]) {
            setCartItems((pre)=>({...pre,[itemId]:1}))
        }
        else{
            setCartItems((pre)=>({...pre,[itemId]:pre[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) =>
    {
        setCartItems((pre)=>({...pre,[itemId]:pre[itemId]-1}))
    }

    const getTotalCartInput = ()=>
    {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] >0 )
            {
            let itemInfo = food_list.find((product) => product._id === item);
            totalAmount  += itemInfo.price * cartItems[item];
            }

        }
        return totalAmount;
    }



    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartInput
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;