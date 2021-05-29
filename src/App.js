// 1.to install the complete package : npx create-react-app foldername (from jouzaa : clean react , just type (npm i)) and install others , axios , expres ..etc check it from pkg.json under dependenceis
// 2.turn on React (npm run start)
// 3.open on chrome (localhost:3000)
// Best practice name the cpmponnents pascal case (ex.App)

import React, { useState } from "react";
import './App.css';



// components
// import List from './components/List'





// =========================== APP ==========================================

const App = () => {


 
  const [posts, setPosts] = useState([{userId : 'useriiid1' , id: 'iiid1'  , title: 'tiiiitle1' ,  body: 'bodyyyy1'} , 
  {userId : 'useriiid2' , id: 'iiid2'  , title: 'tiiiitle2' ,  body: 'bodyyyy2'} ])
  


// ex. const name = 'jack' // const age = 30
// const todos = [{todo: "wake up", id: 1}, {todo: "breakfast", id: 2}, {todo: "study", id: 3}]

  return (
    <>
     
    <div className="App">
     <h1>Blog App</h1>
     
    
     {/* here in return just jsx , to call a component: <List/> */}
   
    </div>
    </>
  );
};




export default App;
