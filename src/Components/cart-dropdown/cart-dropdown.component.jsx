import '../cart-dropdown/cart-dropdown.style.scss'
import Button from '../button/button.component';

const CartDropDown=()=>{
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button>CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;