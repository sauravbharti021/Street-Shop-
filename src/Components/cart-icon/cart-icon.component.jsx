
import {ItemCount, ShoppingIcon, CartIconContainer} from './cart-icon.style.jsx'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CartIcon =() =>{

    const {isCartOpen, setIsCartOpen}= useContext(CartContext)
    const {cartCount} =useContext(CartContext)
    
    const toggle =() => setIsCartOpen(!isCartOpen);
    return(
        <CartIconContainer onClick={toggle}>
             <ShoppingIcon className="shopping-icon" />
             <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon;