import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.style.jsx'
import '../../Components/checkout-items/checkout-items.component'
import CheckoutItems from '../../Components/checkout-items/checkout-items.component';

const Checkout =() => {

    const { cartItems, cartTotal} = useContext(CartContext)

    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>

            </CheckoutHeader>

            {
                cartItems.map((item)=> {
                    const {id, name, quantity} =item;
                    return (
                        <CheckoutItems key={item.id} cartItem={item} />    

                    )
                } )
            }
            <Total> Total : ${cartTotal}</Total>        
        </CheckoutContainer>
    )
}
export default Checkout;