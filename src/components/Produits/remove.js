import {StyledContent, StyledTabTitle, StyledTab, StyledSpace, StyledTabCard, StyledTabButton, StyledContentScroll}from "../StyleProduits.js"
import {colors}from "../Styles"
import { AiFillDelete } from 'react-icons/ai';
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

export const DsRemove = (props) => {
   const {produits} = props;
   const [card, setCard] = useState(false);
   const [prod, setPro] = useState([]);
   return(
      <StyledContent>
      <StyledTab>
         <StyledTabTitle bg={colors.sideBar}>Name</StyledTabTitle>
         <StyledTabTitle bg={colors.sideBar}>Description</StyledTabTitle>
         <StyledTabTitle bg={colors.sideBar}>Price</StyledTabTitle>
         <StyledTabTitle bg={colors.sideBar}>Delette</StyledTabTitle>
      </StyledTab>
      <StyledSpace/>
      <Card card={card} setCard={setCard} produit={prod}/>
      <StyledContentScroll>
      {produits.map((produit) => 
         <StyledTab key={produits.id}>
            <StyledTabCard onClick={(e) => handleCard(produit, setCard, setPro)}>{produit.name}</StyledTabCard>
            <StyledTabTitle>{produit.description}</StyledTabTitle>
            <StyledTabTitle>{produit.price}</StyledTabTitle>
            <StyledTabButton onClick={(e) => alert("ok")}><AiFillDelete/></StyledTabButton>
         </StyledTab>
      )}
      </StyledContentScroll>
      </StyledContent>
   )
}

export default DsRemove;
