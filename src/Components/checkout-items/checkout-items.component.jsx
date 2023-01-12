import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import '../checkout-items/checkout-items.style.scss'
  

const CheckoutItems =({cartItem})=> {

    const {name, quantity, imageUrl, price } = cartItem;    

    const { clearItemsFromCart, addItemsToCart, removeItemsFromCart , } =useContext(CartContext);

    const clearItemsHandler = ()=> clearItemsFromCart(cartItem);
    const addItemsHandler = ()=> addItemsToCart(cartItem);
    const removeItemsHandler = () => removeItemsFromCart(cartItem);

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemsHandler}>
                    &#10094;
                </div>

                <span className='value'>{quantity}</span>  
                <div className='arrow' onClick={addItemsHandler} >
                    &#10095;
                </div>
                </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemsHandler}> &#10005;</div>


        </div>
    )

}
export default CheckoutItems;