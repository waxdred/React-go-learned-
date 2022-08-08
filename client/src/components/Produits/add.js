import { useState } from "react";
import {StyledContentAdd, StyledFrom, StyledInput, StyledLabel, StyledText, StyledInputFile, StyledAdd}from "../StyleProduits.js"
import {v4 as uuidv4} from 'uuid';
import { Notification }from "../notification"
import Axios from "axios"
import { lighten } from "@material-ui/core";

export const DsAdd = (props) => {
   const {handleAdd} = props;
   const [notify, setNotify] = useState({isOpen: false, massage: '', type: ''})
   const [list, setList] = useState([])
	function handChange(event){
		setList({...list,[event.target.name]: event.target.value});
	}	

	function handleAddProduit(){
      const id = uuidv4();
      Axios.post('http://localhost:3001/add/produit', {
         id: id,
         name: list.name,
         description: list.description,
         url: list.url,
         price: list.price,
      }).then(() => {console.log("Success")});
	}

   function handleConfirmation(){
      list.id = uuidv4();
      if (!list.name || !list.description){
         setNotify({isOpen: true, message: 'Remplisser tous les champs', type: 'error'})
      }
      else{
         // handleAdd(list);
         handleAddProduit();
         setList({id: "",
            name: "", 
            description: "",
            url: "",
            price: "",
         })
         setNotify({isOpen: true, message: 'Produit add', type: 'success'})
      }
   }
   return(
      <StyledContentAdd
         initial={{opacity: 0, y: 500}}
         animate={{opacity:1, y: 0}}
         transition={{duration: "0.5"}}
      >
      <StyledFrom>
         <StyledLabel>Nom du produit:</StyledLabel><br/>
            <StyledInput name="name" value={list.name} onChange={(event) => handChange(event)}/>
         <StyledLabel>Description:</StyledLabel ><br />
            <StyledText name="description"value={list.description} onChange={(event) => handChange(event)}rows="18" cols="30"/>
         <StyledLabel type="file" aria-hidden="true" >Photo:</StyledLabel><br/>
            <StyledInputFile type="file" size="0"/>
         <StyledLabel aria-hidden="true">Prix:</StyledLabel>
            <StyledInput name="price"value={list.price} onChange={(event) => handChange(event)}/>
         <StyledAdd onClick={() => handleConfirmation()}>confirmation</StyledAdd>
         <Notification notify={notify} setNotify={setNotify}/>
      </StyledFrom>
      </StyledContentAdd>
   )
}

export default DsAdd;
