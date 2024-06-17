import React from "react";
// import {BrowserRouter as Router,Routes,Route,Navigate,Link} from "react-router-dom"

function Home(){
  return (
    <div>
      <h2>hi 2</h2>
     
      
    </div>
  );
  
  
}
function Home2(){
  return <h2>hi 2</h2>
}
function Fun({child}){
  return 1?child:null;
}
function App(){
  return(
  <h1>App</h1>
  );
}
export default App;