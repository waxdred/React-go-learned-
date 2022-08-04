import {colors} from "./Styles"
import styled from 'styled-components'

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

export const StyledContent = styled.div`
   display: block;
   margin: 10px;
   margin-top: 0px;
   widgh: 100%;
   height: 88%;
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
   overflow:scroll
`;

export const StyledTabTitle = styled.p`
      display: block;
      height: 20px;
      width: 35%;
      padding: 10px;
      margin: 0;
      overflow:scroll;
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
      overflow:scroll;
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

export const StyledTabButton = styled.p`
      display: block;
      height: 20px;
      width: 35%;
      text-align: center;
      padding: 10px;
      color: ${colors.primary};
      font-size: 20px;
      margin: 0;
      overflow:scroll;
      background-color:${(props) => props.bg};
      color:${(props) => props.bgtext};
      border-left: 2px solid ${colors.grey};
`;
