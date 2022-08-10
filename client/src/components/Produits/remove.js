import {StyledContent, StyledTabTitle, StyledTab, StyledSpace, StyledTabCard, StyledTabButton, StyledContentScroll ,StyledTabDiv}from "../StyleProduits.js"
import {colors}from "../Styles"
import { AiFillDelete} from 'react-icons/ai';
import {MdOutlineModeEditOutline} from "react-icons/md"
import VisualCard from "../Produits/VisualCard"
import { useState } from "react";
import { NotifyCheck, NotifyEdit}from "../notification.js"

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
   const {produits, handleDelete, handleReplace} = props;
   const [popup, setPopup] = useState(false)
   const [popupEdit, setPopupEdit] = useState(false)
   const [id, setId] = useState('')
   const [card, setCard] = useState(false);
   const [prod, setPro] = useState([]);
   const [produitForEdit, setProduitForEdit] = useState({});

   const updateEdit = (id) => {
      const newp = produits.filter((t) => t.id == id)
      setId(id);
      setProduitForEdit(...newp)
      setPopupEdit(true);
   }

   const updateDelete = (produit) => {
      setId(produit);
      setPopup(true);
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
         <StyledTabTitle bg={colors.sideBar}>Delete / Edit</StyledTabTitle>
      </StyledTab>
      <StyledSpace/>
      <Card card={card} setCard={setCard} produit={prod}/>
      <StyledContentScroll>
      {produits.map((produit) => 
         <StyledTab key={produits.id}>
            <StyledTabCard onClick={() => handleCard(produit, setCard, setPro)}>{produit.name}</StyledTabCard>
            <StyledTabTitle>{produit.description}</StyledTabTitle>
            <StyledTabTitle>{produit.price}</StyledTabTitle>
            <StyledTabDiv>
               <StyledTabButton onClick={() => updateDelete(produit)}><AiFillDelete/></StyledTabButton>
               <StyledTabButton onClick={() => updateEdit(produit.id)}><MdOutlineModeEditOutline/></StyledTabButton>
            </StyledTabDiv>
         </StyledTab>
      )}
      <NotifyCheck popup={popup} setPopup={setPopup}  handleDelete={handleDelete} id={id}/>
      <NotifyEdit popupEdit={popupEdit} setPopupEdit={setPopupEdit} 
      produitForEdit={produitForEdit} setProduitForEdit={setProduitForEdit} handleReplace={handleReplace}/>
      </StyledContentScroll>
      </StyledContent>
   )
}

export default DsRemove;
