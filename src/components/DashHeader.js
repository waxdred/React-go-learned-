
import { useState } from "react"
import {StyledSideBar, StyledLogo, StyledText, StyledMenu, StyledP} from "../components/Styles"
import Logo from "../assets/logo.png"
import { Tb3DCubeSphere} from 'react-icons/tb';
import { MdDashboard, MdOutlinePriceChange} from 'react-icons/md';
import { HiLogout} from 'react-icons/hi';
import {motion} from 'framer-motion';



const SideBar = (props) => {
	const { sideBars, handleMenu} = props;
   return (
       <StyledSideBar>
            <StyledText size="20px"><StyledLogo img={Logo} size="30px"/>Dashboard</StyledText>
               <ul>
                     {sideBars.map((side) => 
                              <StyledMenu key={side.id} 
                                 size="16px"
                                 to={side.to}
                                 onClick={(e) => handleMenu(side.name, sideBars)}
                                 >
                                 <StyledP active={side.active}>{side.icon}</StyledP>
                                 <StyledP active={side.active}>{side.name}</StyledP></StyledMenu>)}
               </ul>
       </StyledSideBar>
   )
}
export default SideBar
