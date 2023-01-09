import { Fragment, useContext } from 'react';
import { Link, Outlet } from "react-router-dom";

import { UserContext } from '../../context/user-context';
import { CartContext } from '../../context/cart.context';

import {ReactComponent as CrownLogo } from '../../assests/crown.svg'
import CartIcon from '../../Components/cart-icon/cart-icon.component';
import CartDropDown from '../../Components/cart-dropdown/cart-dropdown.component';
import './navigation.style.scss'

import { signOutUser } from '../../util/firebase/firebase.util';

const Navigation =() =>{

     const { currentUser} =useContext(UserContext);
     const {isCartOpen} =useContext(CartContext);
     // console.log(currentUser);
     // console.log("navigation tak pahuch")

     

    return(
       <Fragment>
         <div className='navigation'>
           <Link className='logo-container' to='/'>
                <CrownLogo className='logo' />
            </Link> 
           <div className='nav-links-container' >
                <Link className='nav-link' to='/shop'>
                     Shop Here 
                </Link>
                { currentUser ? (
                <span className='nav-link' onClick={signOutUser}>
                    SIGN OUT
                </span> ) :
                (<Link className='nav-link' to='/auth'>
                SIGN IN
               </Link> )
               }    
               <CartIcon />     
           </div>
           {isCartOpen && <CartDropDown/>}
         </div>
         <Outlet />
       </Fragment>
    )   
 }

 export default Navigation;