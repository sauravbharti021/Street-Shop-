import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from './checkout-items.style.jsx'
  

const CheckoutItems =({cartItem})=> {

    const {name, quantity, imageUrl, price } = cartItem;    

    const { clearItemsFromCart, addItemsToCart, removeItemsFromCart , } =useContext(CartContext);

    const clearItemsHandler = ()=> clearItemsFromCart(cartItem);
    const addItemsHandler = ()=> addItemsToCart(cartItem);
    const removeItemsHandler = () => removeItemsFromCart(cartItem);

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemsHandler}>
                    &#10094;
                </Arrow>

                <Value>{quantity}</Value>  
                <Arrow onClick={addItemsHandler} >
                    &#10095;
                </Arrow>
                </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemsHandler}> &#10005;</RemoveButton>


        </CheckoutItemContainer>
    )

}
export default CheckoutItems;