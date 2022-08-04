
// import {StyledContainer} from "./Styles"
//page import
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import {Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion";

const MotionRoutes = () => {
         const location = useLocation();
         return (
            <AnimatePresence>
            <Routes location={location} key={location.pathname}>
               <Route path="/" element={<Home/>}/>
               <Route path="/Dashboard" element={<Dashboard/>}/>
            </Routes>
            </AnimatePresence>
         )
}  

export default MotionRoutes;
