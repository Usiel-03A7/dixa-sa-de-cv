import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home"



export default function App(){
    return (
        <>
        <BrowserRouter>
         <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/About" element={<About/>} />
         <Route path="/Contact" element={<Contact/>} />
         </Routes>
        </BrowserRouter>
        
        </>
    )
}
