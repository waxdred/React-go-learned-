
import {StyledCard, StyledClose, StyledPicture, StyledCardH2, StyledCardP}from "../StyleProduits.js"
import {AiFillCloseCircle} from 'react-icons/ai';

//need serveur for get dynamique url picture
export const VisualCard = (props) => {
   const {produit, setCard} = props;
   console.log(produit.url)
   return (
      <StyledCard>
         <StyledClose onClick={() => setCard(false)}><AiFillCloseCircle/></StyledClose>
         <StyledPicture src={produit.url}/> 
         <StyledCardH2>Description:</StyledCardH2>
         <StyledCardP>{produit.description}</StyledCardP>
      </StyledCard>
   )
}

export default VisualCard
