import {StyledContent, StyledTabTitle, StyledTab, StyledSpace, StyledTabCard, StyledTabButton, StyledContentScroll ,StyledTabDiv, StyledApprouve}from "../StyleProduits.js"
import {colors}from "../Styles"
import { AiFillDelete} from 'react-icons/ai';
import {MdOutlineModeEditOutline} from "react-icons/md"
import VisualCard from "../Produits/VisualCard"
import { useState } from "react";
import { NotifyCheck }from "../notification.js"

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
   const [btnDelete, setBtnDelete] = useState(false)
   const [popup, setPopup] = useState(false)
   const [id, setId] = useState('')
   const [card, setCard] = useState(false);
   const [prod, setPro] = useState([]);
   const [notify, setNotify] = useState({isOpen: false, massage: '', type: ''})
   const update = (id) => {
      // handleDelete(id)
      setId(id);
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
               <StyledTabButton onClick={() => update(produit.id)}><AiFillDelete/></StyledTabButton>
               <StyledTabButton onClick={() => console.log("edite")}><MdOutlineModeEditOutline/></StyledTabButton>
            </StyledTabDiv>
         </StyledTab>
      )}
      <NotifyCheck popup={popup} setPopup={setPopup} id={id} handleDelete={handleDelete}/>
      </StyledContentScroll>
      </StyledContent>
   )
}

export default DsRemove;
