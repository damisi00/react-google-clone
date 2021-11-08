import React,{Fragment} from 'react';
// import {Link} from 'react-router-dom';
import {} from './header.css';
import menuIcon from '../image/menu_icon.png';
const Header = () => {
       return (
              <>
               <div className="header">
                     <div className="links"> 
                            <a className="links-usual">Gmail</a>
                            <a className="links-usual">Images</a>
                            <a className="menu-icon"><img src={menuIcon} alt="" /></a>
                            <button className="links-signin  btn btn-primary">Sign in</button>
                     </div>
              </div>
              </>
       )
}

export default Header