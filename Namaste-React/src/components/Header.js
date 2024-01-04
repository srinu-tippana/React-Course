import { useEffect, useState } from "react";
import {LOGO_URL}  from "../utils/constants";

import { Link } from "react-router-dom";


const Header =()=>{

  //let btnName="Login";
  const[btnNameReact,setBtnNameReact]= useState("Login")
  

  useEffect(()=>{
       console.log("useEffectCalled");
  },[btnNameReact])

    return(
      <div className="header">
        <div className="logo-container">
              <img  className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              console.log("Log utto");
             btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")
              
            }}>{btnNameReact}</button>
          </ul>
  
        </div>
  
      </div>
    );
  }

export default Header;