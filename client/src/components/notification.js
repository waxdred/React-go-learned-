import {Snackbar} from "@material-ui/core"
import {Alert} from "@material-ui/lab"
import React from 'react'
import {StyledApprouve, StyledNotify, StyledNotifyBtn, StyledNotifBtn}from "../components/StyleProduits"
import { motion } from "framer-motion";

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
      console.log(id)
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

