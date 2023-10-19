import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/HomePage/Home";
import React from 'react'
import Profile from "./components/Profile/Profile";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import "./app.css"
import MentorSignUp from "./components/SignUp/MentorSignUp";
import MentorLogin from "./components/Login/MentorLogin";

function App() {
const [user,setUser]=React.useState("");

const queryClient = new QueryClient()
  return (
    <>
<div>
<QueryClientProvider client={queryClient}>
<BrowserRouter>
<Routes>
{/* <Route path="/" element={}>


</Route> */}

<Route path="logIn" element={<Login setUser={setUser}/>}/>

<Route path="signUp" element={<SignUp setUser={setUser}/>}/>
<Route path="mentor/signUp" element={<MentorSignUp setUser={setUser}/>}/>
<Route path="mentor/logIn" element={<MentorLogin setUser={setUser}/>}/>

<Route path="/" element={<Home user={user}/>}/>
<Route/>



</Routes>
</BrowserRouter>
</QueryClientProvider>

</div>
    
    </>
  )
}

export default App
