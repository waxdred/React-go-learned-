
import styled from 'styled-components'

export const StyledFlag = styled.div`
   display: flex;
   flex-direction: row;
   width: 100%;
   height: 2%;
   align-items: center;
   justify-content: center;
   p{
      color: ${(props) => props.color};
      margin: 5px;
      margin-right: 30px;
   };
`;

export const StyledLine = styled.div`
   display: block;
   position: relative;
   margin: 10px;
   left: 20%;
   width: 60%;
   height: 1px;
   background-color: pink;
`;
