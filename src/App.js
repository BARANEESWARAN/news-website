import UpdateDetails from "./page"
  
import {useState} from 'react'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import About from './about';
import Home from './home';
import Dash from "./Components/Dashboard/Dash";
import Header from "./Components/Dashboard/header";


function App() {
  const [New,setNew]=useState("everything")
  return (
    <div className="hi">
       <Header newinput={setNew}/>
       <br></br><br></br>
       <Home values={New}/>
    </div>
   
    // <BrowserRouter>
    // <div>
    //   {/* <header>
    //     <Link to='/'>Home</Link>{' '}
    //     <Link to='/about'>About</Link>{' '}
    //     <Link to='/login'>Login</Link>
    //   </header> */}
    //    <Header newinput={setNew}/>
     
    

 
    //   <header>
    //     <Link to='/'>Home</Link>{' '}
   
    //     <Link to='/home'>home</Link>
    //     <Link to='/news'>News</Link>{' '}
    //   </header>
    //   <main>
    //   <Routes>
    //   <Route exact path="/home" element={<Dash/>}></Route>
      
    //     <Route path="/news" element={<Home values={New}/>} ></Route>
      
   
    // </Routes>
    // </main>


    //      {/* <Dash/>     */}
    //      </div>
    //      </BrowserRouter> 
  );
}

export default App;
