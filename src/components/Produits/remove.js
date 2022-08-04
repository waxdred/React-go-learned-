import {StyledContent, StyledTabTitle, StyledTab, StyledSpace, StyledTabCard, StyledTabButton}from "../StyleProduits.js"
import {colors}from "../Styles"
import { AiFillDelete } from 'react-icons/ai';

export const DsRemove = (props) => {
   const {produits} = props;
   return(
      <StyledContent>
      <StyledTab>
         <StyledTabTitle bg={colors.sideBar}>Name</StyledTabTitle>
         <StyledTabTitle bg={colors.sideBar}>Description</StyledTabTitle>
         <StyledTabTitle bg={colors.sideBar}>Price</StyledTabTitle>
         <StyledTabTitle bg={colors.sideBar}>Delette</StyledTabTitle>
      </StyledTab>
      <StyledSpace/>
      {produits.map((produit) => 
         <StyledTab key={produits.id}>
            <StyledTabCard onClick={(e) => alert("ok")}>{produit.name}</StyledTabCard>
            <StyledTabTitle>{produit.description}</StyledTabTitle>
            <StyledTabTitle>{produit.price}</StyledTabTitle>
            <StyledTabButton onClick={(e) => alert("ok")}><AiFillDelete/></StyledTabButton>
         </StyledTab>
      )}
      </StyledContent>
   )
}

export default DsRemove;
