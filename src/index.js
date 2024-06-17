import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials=true;
function Home2()
{   
    const user={username:"abc",password:"123"}
    axios.post("http://localhost:4000/login",user,{withCredentials:true}).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
    // <Navigate to="/home"/>

    return <h1>hello2</h1>
   
}
function Protected({children}){
    const [set,Setchild]=React.useState(null);
    React.useEffect(()=>{
        axios.get("http://localhost:4000/user").then((res)=>{
            if(res.status==200){
                Setchild(true);
            }
            else{
                Setchild(false);
            }
            
        }).catch((err)=>{
            Setchild(false);
        })
    },[]);
   
    // .catch((err)=>{
        // return <h1>hello page</h1>;
    // })
    return set?children:<h1> hello there  </h1>
    
}
function App2(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/home" element={
                    <Protected>
                        <Home/>
                    </Protected>
                    }/>
                <Route path="/home2" element={<Home2/>}/>
            </Routes>
        </Router>
    );
}
ReactDOM.render(<App2/>,document.querySelector(".root"))

