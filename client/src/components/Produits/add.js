import {StyledContent}from "../StyleProduits.js"

export const DsAdd = () => {
   return(
      <StyledContent
         initial={{opacity: 0, y: 500}}
         animate={{opacity:1, y: 0}}
         transition={{duration: "0.5"}}
      >
      </StyledContent>
   )
}

export default DsAdd;
