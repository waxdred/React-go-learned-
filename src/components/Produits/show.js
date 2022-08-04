import {StyledContent, StyledTabTitle, StyledTab, StyledSpace, StyledTabCard}from "../StyleProduits.js"
import {colors}from "../Styles"

export const DsShow = (props) => {
   const {produits} = props;
   return(
      <StyledContent>
      <StyledTab>
         <StyledTabTitle bg={colors.sideBar}>Name</StyledTabTitle>
         <StyledTabTitle bg={colors.sideBar}>Description</StyledTabTitle>
         <StyledTabTitle bg={colors.sideBar}>Price</StyledTabTitle>
      </StyledTab>
      <StyledSpace/>
      {produits.map((produit) => 
         <StyledTab key={produits.id}>
            <StyledTabCard onClick={(e) => alert("ok")}>{produit.name}</StyledTabCard>
            <StyledTabTitle>{produit.description}</StyledTabTitle>
            <StyledTabTitle>{produit.price}</StyledTabTitle>
         </StyledTab>
      )}
      </StyledContent>
   )
}

export default DsShow;
