import {colors} from "./Styles"
import styled from 'styled-components'
import { motion } from "framer-motion";

export const StyledMenu = styled.ul`
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const  StyledMenuText = styled.li`
   margin: 16px;
   margin-top: 5px;
   padding: 10px 20px 10px 20px;
   align-items: center;
   text-decoration: none;
   list-style-type: none; 
   border: 3px solid #fff0;
   border-bottom-color: ${colors.dark1};
   border-top-color: ${colors.sideBar};
   border-bottom-color: ${colors.sideBar};
   border-top: ${colors.sideBar};
   border-bottom: ${colors.sideBar};
   border-radius: ${(props) => props.size};
   font-size: ${(props) => props.size};
   transition: 0.6s;
   color: ${(props) => props.active ? colors.primary : colors.sideBar};
   transform: ${(props) => props.active ? "translate(0, 18px)" : ""};
   border-right-color: ${(props) => props.active ? colors.grey : colors.sideBar};
   border-left-color: ${(props) => props.active ? colors.grey : colors.sideBar};
   &:hover{
      cursor: pointer;
      transition: 0.6s;
      transform: translate(0, 18px);
      border-right-color: ${colors.grey};
      border-left-color: ${colors.grey};
   }
`;

export const StyledContent = styled(motion.div)`
   display: block;
   margin: 10px;
   margin-top: 0px;
   widgh: 100%;
   height: 88%;
   background-color: ${colors.dark3};
   border: 3px solid ${colors.grey};
   border-radius: 10px;
`;

export const StyledContentAdd = styled(motion.div)`
   display: block;
   margin: 10px;
   margin-top: 0px;
   widgh: 400px;
   height: 600px;
   background-color: ${colors.dark3};
   border: 3px solid ${colors.grey};
   border-radius: 10px;
`;

export const StyledSpace = styled.th`
   widgh: 90%;
   height: 3px;
`;

export const StyledTab = styled.div`
   padding: 0;
   margin: 0;
   display: flex;
   justify-content: left;
   border: 2px solid ${colors.grey};
   overflow: hidden;
`;

export const StyledTabTitle = styled.p`
      display: block;
      height: 20px;
      width: 35%;
      padding: 10px;
      margin: 0;
      overflow: hidden;
      background-color:${(props) => props.bg};
      color:${(props) => props.bgtext};
      border-left: 2px solid ${colors.grey};
`;

export const StyledTabCard = styled.a`
      display: block;
      height: 20px;
      width: 35%;
      padding: 10px;
      margin: 0;
      overflow: hidden;
      background-color:${(props) => props.bg};
      color:${(props) => props.bgtext};
      border-left: 2px solid ${colors.grey};
      &:hover{
         transition: 0.6s;
         cursor: pointer;
         font-size: 1.1em;
         color: #fff;

      }
`;

export const StyledTabDiv = styled.div`
      display: flex;
      height: 20px;
      width: 35%;
      text-align: center;
      align-items: center;
      justify-content: space-evenly;
      padding: 10px;
      color: ${colors.primary};
      font-size: 20px;
      margin: 0;
      overflow: hidden;
      background-color:${(props) => props.bg};
      color:${(props) => props.bgtext};
      border-left: 2px solid ${colors.grey};
      transition: 1s;
      &:hover{
         transition: 1s;
         cursor: pointer;
         font-size: 24px;
      }
`;

export const StyledTabButton = styled.div`
      margin: 15px;
      color: ${colors.primary};
      font-size: 20px;
      transition: 1s;
      &:hover{
         transition: 1s;
         cursor: pointer;
         font-size: 24px;
      }
`;

export const StyledContentScroll = styled.div`
   widgh: 100%;
   height: 92%;
   overflow: hidden;
`;

export const StyledCard = styled(motion.div)`
   display: block;
   position: fixed;
   marging: 0;
   padding: 3px;
   height: 200px;
   width: 50%;
   overflow: hidden;
   border: 2px solid ${colors.grey};
   border-radius: 10px;
   background-color: ${colors.grey};
   box-shadow: 2px 2px 5px ${colors.sideBar};
`;

export const StyledClose = styled.p`
   display: flex;
   justify-content: right;
   margin: 0;
   padding: 0;
   margin: 10px;
   font-size: 20px;
   color: ${colors.primary};
`;

export const StyledPicture = styled.img`
   float: left;
   padding-right: 10px;
   width: 100px;
   height: 100px;
   color: ${colors.primary};
`;

export const StyledCardH2 = styled.h2`
   color: ${colors.primary};
`;

export const StyledCardP = styled.p`
   text-align: justify;
   text-justify: inter-word;
   color: ${colors.primary};
`;

export const StyledNotify = styled(motion.h3)`
   text-align: center;
   text-justify: inter-word;
`;

export const StyledNotifyBtn = styled(motion.div)`
   display: flex;
   margin: 20px;
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
`;
export const StyledNotifBtn = styled(motion.button)`
   
   background-color: ${colors.primary};
`;

export const StyledApprouve = styled(motion.div)`
   position: absolute;
   top: 40%;
   left: 50%;
   transform: translate(-50%, -50%);
   height: 100px;
   width: 300px;
   border: 2px solid ${colors.primary};
   border-radius: 10px;
   background-color: ${colors.grey};
   box-shadow: 2px 2px 5px ${colors.sideBar};
`;

export const StyledEdit = styled(motion.div)`
   position: absolute;
   top: 59%;
   left: 50%;
   overflow: scroll;
   transform: translate(-50%, -50%);
   height: 600px;
   width: 300px;
   border: 2px solid ${colors.primary};
   border-radius: 10px;
   background-color: ${colors.dark1};
   box-shadow: 2px 2px 5px ${colors.sideBar};
`;

export const StyledFrom = styled.form`
   display: flex;
   flex-direction: column;
`;

export const StyledInput = styled.input`
   height: 30px;
   width: 40%;
   overflow: hidden;
   background-color: ${colors.light}
}
`;

export const StyledInputFile = styled.input`
   height: 30px;
   width: 40%;
   overflow: hidden;
}
`;

export const StyledText = styled.textarea`
   height: 200px;
   width: 80%;
   overflow: hidden;
   background-color: ${colors.light}
`;

export const StyledLabel = styled.label`
   margin: 2%;
   margin-bottom: 0px;
`;
export const StyledAdd = styled.p`
   text-align: center;
   padding: 20px;
   border: 2px solid ${colors.grey};
   border-radius: 10px;
   background-color: ${colors.light};
   &:hover{
      cursor: pointer;
      transition: 0.6s;
      transform: translate(0, -5px);
      box-shadow: 2px 2px 5px ${colors.sideBar};
   }
`;
