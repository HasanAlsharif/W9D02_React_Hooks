// shortcut is rfc
// always type in { useState } in the import, and inthe function (props) if you need to use them later
// use nfn shortcut for creating the function




import React, { useState } from "react";

const Component = () => {

  // ex. const name = 'jack' // const age = 30


  return (
    <>
     <div className="App">
     <h1>Compnenrt1</h1>
    </div>
    </>
  );
};




export default Component;

// then  you need to import it in (App.js)
// --> taype in: import Compnent from './components/Compente' 
// then call it inside app function -- > just type in: <Component/> 
// if you call more <Component/>  it wil repeat the text inside or whatevevr value inside