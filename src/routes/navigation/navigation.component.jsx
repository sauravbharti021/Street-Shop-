import { Fragment } from 'react';
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrownLogo } from '../../assests/crown.svg'
import './navigation.style.scss'

const Navigation =() =>{
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
                <Link className='nav-link' to='/auth'>
                    SIGN IN
                </Link>
 
           </div>
         </div>
         <Outlet />
       </Fragment>
    )   
 }

 export default Navigation;