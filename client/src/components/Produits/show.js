import {StyledContent, StyledTabTitle, StyledTab, StyledSpace, StyledTabCard, StyledContentScroll}from "../StyleProduits.js"
import {colors}from "../Styles"
import VisualCard from "../Produits/VisualCard"
import { useState } from "react";

const handleCard = (produit, setCard, setPro) => {
   setCard(true);
   setPro(produit)
}

const Card = (props) => {
   const {card, setCard, produit} = props;
   if (card)
      return(<VisualCard setCard={setCard} produit={produit}/>)
}

export const DsShow = (props) => {
   const {produits} = props;
   const [card, setCard] = useState(false);
   const [prod, setPro] = useState([]);
   return(
      <StyledContent
         initial={{opacity: 0, y: 500}}
         animate={{opacity:1, y: 0}}
         transition={{duration: 1}}
      >
      <StyledTab>
         <StyledTabTitle bg={colors.sideBar}>Name</StyledTabTitle>
         <StyledTabTitle bg={colors.sideBar}>Description</StyledTabTitle>
         <StyledTabTitle bg={colors.sideBar}>Price</StyledTabTitle>
      </StyledTab>
      <StyledSpace/>
      <Card card={card} setCard={setCard} produit={prod}/>
      <StyledContentScroll>
      {produits.map((produit) => 
         <StyledTab key={produits.id}>
            <StyledTabCard onClick={() => handleCard(produit, setCard, setPro)}>{produit.name}</StyledTabCard>
            <StyledTabTitle>{produit.description}</StyledTabTitle>
            <StyledTabTitle>{produit.price}</StyledTabTitle>
         </StyledTab>
      )}
      </StyledContentScroll>
      </StyledContent>
   )
}

export default DsShow;
