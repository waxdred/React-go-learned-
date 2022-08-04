import {StyledContent, StyledContentScroll} from "./Styles"
import {StyledMenu, StyledMenuText} from "./StyleProduits"
import DsAdd from "./Produits/add"
import DsShow from "./Produits/show"
import DsRemove from "./Produits/remove"
import Myheader from "./Myheader"
import { useState } from "react"

const handleMenu = (side, menu, setDsActive) => {
   menu.map((t) => {
      t.active=false;
      if (t.name == side)
         t.active=true;
      console.log(t.name, ": ", t.active)
   })
   getMenu(menu, setDsActive);
}

function getMenu (menu, setDsActive){
   menu.map((side) =>{ 
      if (side.active)
         setDsActive(side.name);
      })
}

const ActiveMenu = (props) => {
   let { dsActive, menu, setDsActive, produits} = props;
   getMenu(menu, setDsActive);
   console.log("active: ", dsActive)
   if (dsActive == "Add")
            return(<DsAdd/>)
   else if (dsActive == "Show")
            return(<DsShow produits={produits}/>)
   else if (dsActive == "Remove")
            return(<DsRemove produits={produits}/>)
}

export const DsProduit = () => {
   const [menu, setMenu] = useState([
      {active: true, id: "2d5eaa16-9543-44b0-9616-36cd4f015954", name: "Add"},
      {active: false, id: "16c20ae0-fece-49e1-99d8-3c3c9185ef79", name: "Show"},
      {active: false, id: "52baec6f-a880-46b1-b3a9-af743512e536", name: "Remove"},
   ])
   const [produits, setProduit] = useState([
      {id: "76671574-9631-4af6-af96-98e131b17cf0", name: "Produit test", description: "Produit de beaute super cool", price: "10$"},
   ])
   const [dsActive, setDsActive] = useState()

   return (
         <StyledContent>
            <h1>Produits</h1>
            <StyledContentScroll>
            <StyledMenu>
                  {menu.map((m) => 
                     <StyledMenuText size="20px" key={m.id}
                     onClick={(e) => handleMenu(m.name, menu, setDsActive, e)}
                     active={m.active}
                     >
                        {m.name}
                     </StyledMenuText>
                  )}
            </StyledMenu>
            <ActiveMenu dsActive={dsActive} 
            menu={menu} setMenu={setMenu} setDsActive={setDsActive} produits={produits}/>
            </StyledContentScroll>
         <Myheader/>
         </StyledContent>
   )
}

export default DsProduit
