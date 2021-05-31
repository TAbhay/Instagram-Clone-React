import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
const Header = (props) => {
    console.log("h p");
    console.log(props);
    return(
        <nav className="navbar">
           <NavLink to ="/"> <div className="nav-logo"> <span className="iconify" data-icon="akar-icons:instagram-fill" data-inline="false" style={{color: 'white'}} data-width={40} data-height={40} /> </div> </NavLink>
               <ul className="navbar-nav" > 
               <NavLink to ="/"> <li className="nav-item"> 
      <span className="iconify" data-icon="ant-design:home-filled" data-inline="false" style={{color: 'white'}} data-width={30} data-height={30} /> </li> </NavLink>
               <NavLink to ="/explore"> <li className="nav-item"> <span className="iconify" data-icon="carbon:explore" data-inline="false" style={{color: 'white'}} data-width={30} data-height={30} /> </li>  </NavLink>
             
            </ul>
            
            <button  id="nav-button" onClick={() => props.isLoggedIn(false)} >Log Out</button>
        </nav>
    );
}
export default Header;
{
    /*#root{
  padding:0;
  position: absolute;
  top: 0;
  left:0;
  bottom: 0;
  width: 100%;  
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/239518/birds1.svg"), url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/239518/birds2.svg"), url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/239518/clouds.svg"), linear-gradient(to bottom,  rgba(255,255,255,0), 40%,rgba(255,255,255,1) 60%), url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/239518/BG2.svg");
  background-size: 20%, 20%, 100%, 100%, 50px;
  background-repeat: no-repeat, no-repeat, no-repeat, repeat-x,repeat;
  background-position: 5% 40%, 95% 60%, center bottom;
} */
}