import { useContext } from 'react';
import '../products-card/products-card.style.scss'
import { CartContext } from '../../context/cart.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';



const ProductCard =({product})=>{

    const {name, price, imageUrl, quantity} = product;
    const {addItemsToCart} = useContext(CartContext);

    const addProductToCart =() => addItemsToCart(product);


    return(
        <div className='product-card-container'>
          <img src={imageUrl} alt={`${name}`} />
          <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
          </div>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick ={addProductToCart} >Add to Cart </Button>  
        </div>
    )
}
export default ProductCard;