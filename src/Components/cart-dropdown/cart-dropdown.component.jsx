import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import '../cart-dropdown/cart-dropdown.style.scss'
import Button from '../button/button.component';

import CartItem from '../cart-items/cart-items.component';


const CartDropDown=()=>{

    const {cartItems} =useContext(CartContext);
   

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
               { cartItems?.map( (item)=> (< CartItem key={item.id} cartItem={item} />))

               }  
            </div>
            <Button>CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;