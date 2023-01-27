import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import {CartDropDownContainer, CartItems, EmptyMessage} from './cart-dropdown.style.jsx'
import Button from '../button/button.component';

import CartItem from '../cart-items/cart-items.component';


const CartDropDown=()=>{

    const {cartItems} =useContext(CartContext);
    const navigate =useNavigate();
    
    const goToCheckoutHandler = () =>{
        navigate('/checkout')
    }

    return(
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ?  (cartItems?.map( (item)=> (< CartItem key={item.id} cartItem={item} />)))
                    :
                    ( <EmptyMessage>Cart empty</EmptyMessage>) 
                }
               
            </CartItems>
            <Button onClick= {goToCheckoutHandler}>CHECKOUT</Button>
        </CartDropDownContainer>
    )
}

export default CartDropDown;