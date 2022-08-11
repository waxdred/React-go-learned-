import {StyledHomeButton, StyledContainer, MotionHome, StyledHome, StyledLogo} from "../components/Styles"
import Logo from "../assets/logo.png"

const Home = () => {
   return(
         <StyledContainer className="home">
            <StyledHome h1size="40px">
               <StyledLogo img={Logo} size="80px"/>
               <h1>Welcome in board</h1>
            <MotionHome
            initial={{opacity: 0, y: 400}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 1}}
            exit={{x: 100, opacity: 0}}>
               <StyledHomeButton size="20" to="/login">Enter
               </StyledHomeButton>
            </MotionHome>
            </StyledHome>
         </StyledContainer>
   )
   
}

export default Home;
