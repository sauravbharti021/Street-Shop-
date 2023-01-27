import { Fragment, useContext } from 'react';
import { Link, Outlet } from "react-router-dom";

import { UserContext } from '../../context/user-context';
import { CartContext } from '../../context/cart.context';

import {ReactComponent as CrownLogo } from '../../assests/crown.svg'
import CartIcon from '../../Components/cart-icon/cart-icon.component';
import CartDropDown from '../../Components/cart-dropdown/cart-dropdown.component';
import {NavigationContainer, LogoContainer ,NavLinks, NavLink}  from './navigation.style'

import { signOutUser } from '../../util/firebase/firebase.util';

const Navigation =() =>{

     const { currentUser} =useContext(UserContext);
     const {isCartOpen} =useContext(CartContext);
     // console.log(currentUser);
     // console.log("navigation tak pahuch")

     

    return(
       <Fragment>
         <NavigationContainer>
           <LogoContainer to="/">
                <CrownLogo className='logo' />
            </LogoContainer> 
           <NavLinks >
                <NavLink to='/shop'>
                     Shop Here 
                </NavLink>
                { currentUser ? (
                <NavLink as='span' onClick={signOutUser}>
                    SIGN OUT
                </NavLink> ) :
                (<NavLink to='/auth'>
                SIGN IN
               </NavLink> )
               }    
               <CartIcon />     
           </NavLinks>
           {isCartOpen && <CartDropDown/>}
         </NavigationContainer>
         <Outlet />
       </Fragment>
    )   
 }

 export default Navigation;