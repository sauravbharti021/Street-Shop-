import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import '../cart-icon/cart-icon.style.scss'

import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
const CartIcon =() =>{

    const {isCartOpen, setIsCartOpen}= useContext(CartContext)

    const toggle =() => setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toggle}>
             <ShoppingIcon className="shopping-icon" />
             <span className='item-count'>10</span>
        </div>
    )
}
export default CartIcon;