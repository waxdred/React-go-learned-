import {StyledContent, StyledTabTitle, StyledTab, StyledSpace, StyledTabCard, StyledTabButton, StyledContentScroll}from "../StyleProduits.js"
import {colors}from "../Styles"
import { AiFillDelete } from 'react-icons/ai';
import VisualCard from "../Produits/VisualCard"
import { useState } from "react";
import Notification from "../notification.js"

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
   const {produits, handleDelete} = props;
   const [card, setCard] = useState(false);
   const [prod, setPro] = useState([]);
   const [notify, setNotify] = useState({isOpen: false, massage: '', type: ''})
   const update = (id) => {
      handleDelete(id, )
      setNotify({isOpen: true, message: 'Produit deleted', type: 'success'})
      
   }
   return(
      <StyledContent
         initial={{opacity: 0, y: 500}}
         animate={{opacity:1, y: 0}}
         transition={{duration: 0.5}}
      >
      <StyledTab>
         <StyledTabTitle bg={colors.sideBar}>Name</StyledTabTitle>
         <StyledTabTitle bg={colors.sideBar}>Description</StyledTabTitle>
         <StyledTabTitle bg={colors.sideBar}>Price</StyledTabTitle>
         <StyledTabTitle bg={colors.sideBar}>Delete</StyledTabTitle>
      </StyledTab>
      <StyledSpace/>
      <Card card={card} setCard={setCard} produit={prod}/>
      <StyledContentScroll>
      {produits.map((produit) => 
         <StyledTab key={produits.id}>
            <StyledTabCard onClick={() => handleCard(produit, setCard, setPro)}>{produit.name}</StyledTabCard>
            <StyledTabTitle>{produit.description}</StyledTabTitle>
            <StyledTabTitle>{produit.price}</StyledTabTitle>
            <StyledTabButton onClick={() => update(produit.id)}><AiFillDelete/></StyledTabButton>
         </StyledTab>
      )}
      <Notification notify={notify} setNotify={setNotify}/>
      </StyledContentScroll>
      </StyledContent>
   )
}

export default DsRemove;
