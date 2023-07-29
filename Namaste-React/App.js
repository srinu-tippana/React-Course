/**
 * <div id ="child">
 *     <div id="parent">
 *      </div>
 * </div>
 */
import React from "react";
import  ReactDOM from "react-dom";
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ])
);

/*<div>
    <div>
          <h1>
          </h1>
          <h2>
            
          </h2>
    </div>
    <div>
          <h1>
          </h1>
          <h2>
            
          </h2>
    </div>
</div>*/

/*const secondParent = React.createElement(
  "div",
  { id: "top parent" },[
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "I am an h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "I am an h2 tag"),
    ])

  ]

);*/
/*
   Jsx is HTML/XML like syntax
*/
// JSX->Babel transpiles it to React.createElement => React Object  => renders to HTML
 const jsxHeading=<h1 id ="heading" tabIndex="5"> Namaste React using Jsx</h1>

 /*const HeadingComponent =()=>(

  <h1 className="heading"> Namaste React using functional component </h1>
 );*/

 const Title = () =>  ( 
 <h1 className="title" >
      Namaste React Using Jsx
  </h1>

 )
 
 /* Component written in inside Component Composition */
 const HeadingComponent = ()=>(
  
  <div id="container">
    <Title/>
    <h1> Hello from React FunctionalComponent</h1>
  </div>
 )
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
