import {StyledContent, StyledContentScroll} from "./Styles"
import {StyledMenu, StyledMenuText} from "./StyleProduits"
import DsAdd from "./Produits/add"
import DsShow from "./Produits/show"
import DsRemove from "./Produits/remove"
import Myheader from "./Myheader"
import { useState } from "react"
import { Notification }from "./notification"
import Axios from "axios"

const handleMenu = (side, menu, setDsActive) => {
   menu.map((t) => {
      t.active=false;
      if (t.name === side)
         t.active=true;
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
   let { dsActive, menu, setDsActive, produits, handleDelete, handleAdd, handleReplace} = props;
   getMenu(menu, setDsActive);
   if (dsActive === "Add")
            return(<DsAdd handleAdd={handleAdd}/>)
   else if (dsActive === "Show")
            return(<DsShow produits={produits}/>)
   else if (dsActive === "Delete Modify")
            return(<DsRemove produits={produits} handleDelete={handleDelete} handleReplace={handleReplace}/>)
}

export const DsProduit = () => {
   const [menu, setMenu] = useState([
      {active: true, id: "2d5eaa16-9543-44b0-9616-36cd4f015954", name: "Add"},
      {active: false, id: "52baec6f-a880-46b1-b3a9-af743512e536", name: "Delete Modify"},
   ])
   const [produits, setProduit] = useState([
         {id: "", 
         name: "", 
         description: "", 
         url: "",
         price: ""},
      ])
   const getProduits = () => {
      Axios.get('http://localhost:3001/get/produits').then((response) => {
         setProduit(response.data);
      });
   }

   const [dsActive, setDsActive] = useState()
   const [notify, setNotify] = useState({isOpen: false, massage: '', type: ''})

   const handleAdd = (produit) => {
		setProduit([...produits, {...produit}]);
   }

   const handleDelete = (id) => {
      const copy = [...produits];
      const updateCopy = copy.filter((c) => c.id !== id);
      setProduit(updateCopy);
      setNotify({isOpen: true, message: 'Produit deleted', type: 'success'})
   }

   const handleReplace = (produitForEdit) => {
      const copy = [...produits];
      const updateCopy = copy.filter((c) => c.id !== produitForEdit.id);
      setProduit(updateCopy);
		setProduit([...updateCopy, {...produitForEdit}]);
      setNotify({isOpen: true, message: 'Produit modiy', type: 'success'})
   }

   return (
         <StyledContent>
            {getProduits()}
            <h1>Produits</h1>
            <StyledContentScroll>
               <StyledMenu>
                     {menu.map((m) => 
                        <StyledMenuText size="20px" key={m.id}
                        onClick={() => handleMenu(m.name, menu, setDsActive)}
                        active={m.active}
                        >
                           {m.name}
                        </StyledMenuText>
                     )}
               </StyledMenu>
               <ActiveMenu dsActive={dsActive} 
                  menu={menu} setMenu={setMenu} setDsActive={setDsActive} 
                  produits={produits} handleDelete={handleDelete} handleAdd={handleAdd} handleReplace={handleReplace}/>
            </StyledContentScroll>
         <Myheader/>
         <Notification notify={notify} setNotify={setNotify}/>
         </StyledContent>
   )
}

export default DsProduit
