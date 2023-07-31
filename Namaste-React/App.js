/**
 * <div id ="child">
 *     <div id="parent">
 *      </div>
 * </div>
 */
import React from "react";
import  ReactDOM from "react-dom";

/*

Header
 Logo 
 Navbar

Body
 
 Search 
 Restaruant container  and within restaruant cards



Footer

 Copy righst and other links 
*/

const Header =()=>{
  return(
    <div className="header">
      <div className="logo-container">
            <img  className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>

      </div>

    </div>
  );
}

const Body =() =>{
  return(
    <div className="body">
      <div className="search">

      </div>

    </div>

  );
};

const AppLayout = ()=>{

  return(
    <div className="app">
       <Header/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)
