import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/HomePage/Home";
import "./app.css"

function App() {


  return (
    <>
<div>
<BrowserRouter>
<Routes>
{/* <Route path="/" element={}>


</Route> */}
<Route path="logIn" element={<Login/>}/>
<Route path="signUp" element={<SignUp/>}/>
<Route path="home" element={<Home/>}/>
</Routes>
</BrowserRouter>
</div>
    
    </>
  )
}

export default App
