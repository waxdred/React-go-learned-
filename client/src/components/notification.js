import {Snackbar} from "@material-ui/core"
import {Alert} from "@material-ui/lab"
import {StyledApprouve, StyledNotify, StyledNotifyBtn, StyledNotifBtn, StyledEdit, StyledFrom, StyledInput, StyledLabel, StyledText, StyledAdd}from "../components/StyleProduits"

export const Notification = (props) => {
   const {notify, setNotify} = props;

   const handleClose = (event, reason) =>{
      setNotify({...notify, isOpen: false})
   }
   return(
      <Snackbar
         open={notify.isOpen}
         autoHideDuration={3000}
         anchorOrigin={{vertical: 'top', horizontal: 'right'}}
         onClose={handleClose}
      >
         <Alert severity={notify.type} onClose={handleClose}>
            {notify.message}
         </Alert>
      </Snackbar>
   )
}

export const NotifyCheck = (props) => {
   const {popup, setPopup, id, handleDelete} = props;
   const deleteId = (id) => {
      handleDelete(id);
      setPopup(false);
   }
   if (popup)
      return (
         <StyledApprouve
         initial={{opacity: 0, height: 0, width: 0}}
         animate={{opacity:1, height: "100px", width: 300}}
         transition={{duration: 0.5}}>
            <StyledNotify
               initial={{opacity: 0, height: 0, width: 0}}
               animate={{opacity:1, height: 20, width: 300}}
               transition={{duration: 0.5}}>Are you sure?</StyledNotify>
               <StyledNotifyBtn>
                  <StyledNotifBtn onClick={() => deleteId(id)}
                     initial={{opacity: 0, height: 0, width: 0}}
                     animate={{opacity:1, height: 25, width: 60}}
                     transition={{duration: 0.5}}
                     >Ok</StyledNotifBtn> 
                  <StyledNotifBtn onClick={() => setPopup(false)}
                     initial={{opacity: 0, height: 0, width: 0}}
                     animate={{opacity:1, height: 25, width: 60}}
                     transition={{duration: 0.5}}
                     >Cancel</StyledNotifBtn> 
               </StyledNotifyBtn>
         </StyledApprouve>
      )
}

export const NotifyEdit = (props) => {
   const {popupEdit, setPopupEdit, produitForEdit, setProduitForEdit ,handleReplace} = props;
   function handleProduit(){
      // setList(...produit)
   }
	function handChange(event){
		setProduitForEdit({...produitForEdit,[event.target.name]: event.target.value});
	}	
   function handlePopup (){
      setPopupEdit(false);
      handleReplace(produitForEdit);
   }
   if (popupEdit)
      return (
         <StyledEdit
         initial={{opacity: 0, height: 0, width: 0}}
         animate={{opacity:1, height: "60%", width: "94%"}}
         transition={{duration: 0.5}}>
         <StyledFrom>
         {handleProduit()}
            <StyledLabel>Nom du produit:</StyledLabel><br/>
               <StyledInput name="name" value={produitForEdit.name} onChange={(event) => handChange(event)}/>
            <StyledLabel>Description:</StyledLabel ><br />
               <StyledText name="description"value={produitForEdit.description} onChange={(event) => handChange(event)}/>
            <StyledLabel aria-hidden="true">Prix:</StyledLabel>
               <StyledInput name="price"value={produitForEdit.price} onChange={(event) => handChange(event)}/>
            <StyledAdd onClick={() => handlePopup()}>confirmation</StyledAdd>
         </StyledFrom>
         </StyledEdit>
      )
}

