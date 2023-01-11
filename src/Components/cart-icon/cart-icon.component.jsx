import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import '../cart-icon/cart-icon.style.scss'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CartIcon =() =>{

    const {isCartOpen, setIsCartOpen}= useContext(CartContext)
    const {cartCount} =useContext(CartContext)
    
    const toggle =() => setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toggle}>
             <ShoppingIcon className="shopping-icon" />
             <span className='item-count'>{cartCount}</span>
        </div>
    )
}
export default CartIcon;