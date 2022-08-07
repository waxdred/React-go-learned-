
import { AiFillGithub} from 'react-icons/ai';
import {StyledFlag, StyledLine} from "../components/StylesMyHeader";
import {colors, StyledLogo} from "../components/Styles.js";
import Logo from "../assets/logo.png"

const Myheader = () => {
   return (
      <>
      <StyledLine pos="-10px"/>
      <StyledFlag color={colors.dark1}>
         <StyledLogo img={Logo} size="20px"/>
         <p>Create by waxdred</p>
         <a href="https://github.com/waxdred" target="_blank">
               <AiFillGithub size={30} color={colors.darkText}/>
         </a>
      </StyledFlag>
      <StyledLine pos="10px"/>
      </>
   )
}

export default Myheader
