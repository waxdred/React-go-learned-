
// import styled for css
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion";

import background from "../assets/back.jpeg"

export const colors = {
   primary: "#fff",
   dark1: "#7E7E7E",
   dark2: "#373737",
   dark3: "#404040",
   trans: "#fff7",
   trans1: "#fff6",
   sideBar: "#fff4",
   darkText: "#ACBAC7",
   grey: "#9899A1",
   red: "red"
}


export const StyledContainer = styled.div`
   margin: 0;
   padding: 0;
   min-height: 100vh;
   display: flex;
   justify-content: center;
   box-sizing: border-box;
   align-items: center;
   background: linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${background});
   background-size: cover;
   background-attachment: fixed;
   list-style-type: none;
   text-decoration: none;
`;

export const StyledContainerDash = styled.div`
   margin: 0;
   min-height: 100vh;
   background: linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${background});
   background-size: cover;
   background-attachment: fixed;
`;
export const Motion = styled(motion.div)`
   margin: 0;
`;

export const MotionHome = styled(motion.div)`
   display: flex;
   align-items: center;
   justify-content: center;
`;
export const StyledHome = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   h1{
      color: white;
      font-size: ${(props) => props.h1size};
   }
`;

export const StyledHomeButton = styled(Link)`
   display:flex;
   color: ${colors.primary};
   align-items: center;
   text-align: center;
   padding: 12px 60px;
   border-radius: 24px;
   font-size: ${(props) => props.size}px;
   background-color: transparent;
   border: 3px solid ${colors.primary};
   transition: 0.6s;
   text-decoration: none;
   &:hover{
      transition: 0.6s;
      opacity: 0.6;
      transform: translate(10px, 10px);
      border: 3px solid ${colors.dark1};
      cursor: pointer;
   }
`;

export const StyledSideBar = styled.div`
   width: 20%;
   position: fixed;
   text-size: 100px;
   left: 0;
   top: 0;
   height: auto;
   border-right: 3px solid ${colors.sideBar};
   border-radius: 0 0 20px 0;
   background-color: ${colors.dark1};
   transition: 0.6;
`;

export const StyledLogo = styled.div`
   margin: 5px;
   padding: 5px;
   width: ${(props) => props.size};
   height: ${(props) => props.size};
   background-image: url(${props => props.img});
   background-size: cover;
   background-position: center;
`;

export const StyledText = styled.h1`
   display: flex;
   flex-direction: row;
   
   align-items: center;
   color: ${colors.dark2};
   font-size: ${(props) => props.size};
   justify-content: flex-start;
`;

export const StyledCard = styled.div`
   display:flex;
   position: relative;
   width:  100%;
   z-index: 2;
   background-color: red;
`;

export const StyledMenu = styled(Link)`
   display:flex;
   position: relative;
   align-items: center;
   justify-content: left;
   flex-wrap: wrap;
   text-decoration: none;
   letter-spacing: 1.5px;
   list-style: none;
   margin-bottom: 20px;
   background-color: ${colors.dark1};
   border: 3px solid #fff0;
   transition: 0.6s;
   border-radius: 16px;
   transition: 0.6s;
   
   &:hover{
      transition: 0.6s;
      transform: translate(13px);
      border-bottom-color: ${colors.dark1};
      border-top-color: ${colors.sideBar};
      border-bottom-color: ${colors.sideBar};
      border-right-color: ${colors.sideBar};
      border-left-color: ${colors.sideBar};
      border-top: ${colors.sideBar};
      border-bottom: ${colors.sideBar};
      z-index:3;
   }
`;

export const StyledP = styled.p`
      color: ${(props) => props.active ? colors.primary : colors.dark2};
      font-size: ${(props) => props.size};
      padding-right: 5px;
      padding-left: 10px;
`;

export const StyledMain = styled.div`
   margin-left: 345px;
`;

export const StyledContent = styled.div`
   display: flex;
   position: absolute;
   
   flex-direction: column;
   margin: 0;
   padding: 0;
   padding-left: 3px;
   min-width: 20%;
   left: 20%;
   top:0;
   width: 80%;
   height: 100%;
   h1{
      color: ${colors.darkText};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 10%;
      padding: 10px;
      background-color: ${colors.dark2};
      opacity: 0.8;
      border: 3px solid ${colors.dark3};
      border-radius: 13px;
   }
`;

export const StyledContentScroll = styled.div`
   display: block;
   width: 98%;
   height: 75%;
   overflow-y: scroll;
   background-color: ${colors.dark2};
   border: 3px solid ${colors.dark3};
   border-radius: 13px;
   opacity: 0.9;
   h2{
      margin: 10px;
      color: ${colors.darkText}; 
   }  
   color: ${colors.darkText}; 
`;
