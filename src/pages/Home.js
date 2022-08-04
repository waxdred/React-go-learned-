
import {StyledHomeButton, StyledContainer, MotionHome, StyledHome, StyledLogo} from "../components/Styles"
import { motion } from "framer-motion";
import Logo from "../assets/logo.png"

const Home = () => {
   return(
         <StyledContainer className="home">
            <StyledHome h1size="40px">
               <StyledLogo img={Logo} size="80px"/>
               <h1>Welcome in board</h1>
            <MotionHome
            intial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            exit={{x: 100}}>
               <StyledHomeButton size="20" to="/Dashboard">Enter
               </StyledHomeButton>
            </MotionHome>
            </StyledHome>
         </StyledContainer>
   )
   
}

export default Home;
