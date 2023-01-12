import { createContext, useState, useEffect } from "react";

const addCartItems =( cartItems, productToAdd)=>{

    const existingCartItems= cartItems.find((cartItem)=> cartItem.id === productToAdd.id ) 

    if(existingCartItems){
        return cartItems.map((cartItem)=>
            cartItem.id === productToAdd.id ? {...cartItem, quantity : cartItem.quantity +1} : cartItem
        );
    }

    return [...cartItems, {...productToAdd, quantity : 1}];
}

const removeCartItems = (cartItems, cartItemsToRemove) => {
    const existingCartItems= cartItems.find((cartItem)=> cartItem.id === cartItemsToRemove.id ) 

    if(existingCartItems.quantity===1){

        return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id);
    }

    return cartItems.map((cartItem)=>
    cartItem.id === cartItemsToRemove.id ? {...cartItem, quantity : cartItem.quantity -1} : cartItem );

}


const clearCartItems =(cartItems, cartItemsToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemsToClear.id);
}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemsToCart : ()=>{},
    cartCount : 0,
    removeItemsFromCart : ()=>{},
    clearItemsFromCart : () => {}, 
    cartTotal :0
})

export const CartProvider= ({children})=>{

    const [isCartOpen, setIsCartOpen]= useState(false);
    const [cartItems, setCartItems] =useState([]);
    const [ cartCount, setCartCount] =useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(()=>{
        const newCartCount= cartItems.reduce( (total, cartItem)=> total + cartItem.quantity, 0  );
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemsToCart =(productToAdd)=>{
        setCartItems(addCartItems(cartItems, productToAdd));
    };

    const removeItemsFromCart =(cartItemsToRemove)=>{
        setCartItems(removeCartItems(cartItems, cartItemsToRemove));
    };

    const clearItemsFromCart=(cartItemsToClear)=>{
        setCartItems(clearCartItems(cartItems, cartItemsToClear) );
    }
    useEffect(()=>{
        const newCartTotal= cartItems.reduce( (total, cartItem)=> total + (cartItem.quantity*cartItem.price) , 0  );
        setCartTotal(newCartTotal);
    }, [cartItems]);




    const value= {
        isCartOpen,
        setIsCartOpen,
        addItemsToCart,
        cartItems,
        cartCount,
        removeItemsFromCart, 
        clearItemsFromCart,
        cartTotal,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}