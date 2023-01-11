import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import '../checkout/checkout.style.scss'
import '../../Components/checkout-items/checkout-items.component'
import CheckoutItems from '../../Components/checkout-items/checkout-items.component';

const Checkout =() => {

    const { cartItems, addItemsToCart, removeItemsFromCart} = useContext(CartContext)

    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>

            </div>

            {
                cartItems.map((item)=> {
                    const {id, name, quantity} =item;
                    return (
                        <CheckoutItems key={item.id} cartItem={item} />    

                    )
                } )
            }
            <span className='total'> Total : 0</span>        
        </div>
    )
}
export default Checkout;