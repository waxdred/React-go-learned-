

import {StyledInputLogin, StyledContainer, StyledLogin, StyledLoginButton, StyledLoginP} from "../components/Styles"
// import {StyledContentAdd, StyledFrom, StyledInput, StyledLabel, StyledText, StyledInputFile, StyledAdd}from "../components/StyleProduits.js"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from "axios"
import { Notification }from "../components/notification"

const Login = () => {
   Axios.defaults.withCredentials = true
   const [notify, setNotify] = useState({isOpen: false, massage: '', type: ''})
   const nav = useNavigate()
   const [redirection, setRedirection] = useState(false);
   const [login, setLogin] = useState({
      login: "",
      pass: "",
   })

   const requestLogin = () => {
      Axios.post('http://localhost:3001/api/log', {
            user: login.login,
            pass: login.pass,
      }).then((response) => {
         if (response.data.message == "succes"){
            setNotify({isOpen: true, message: 'Connection', type: 'success'})
            nav("/dashboard", { replace: true });
            setRedirection(true);
         }
         else{
            setRedirection(false);
            setNotify({isOpen: true, message: 'Connection failed', type: 'warning'})
         } 
      })
   }

   const auth = () => {
      Axios.get('http://localhost:3001/api/user', {}).then((response) => {
         if (response.data.message == "unauthenticated"){
            nav("/login", { replace: true });
            setRedirection(false);
         }else{
            nav("/dashboard", { replace: true });
            setRedirection(true);
         }
      })
   }

	function handChange(event){
		setLogin({...login,[event.target.name]: event.target.value});
	}
   auth()
   return(
      <StyledContainer>
         <StyledLogin>
         <StyledLoginP>Login</StyledLoginP>
         <StyledInputLogin placeholder="login" name="login" onChange={(e) => handChange(e)}/>
         <StyledLoginP>Password</StyledLoginP>
         <StyledInputLogin autocomplete="current-password" placeholder="password" type="password" name="pass" onChange={(e) => handChange(e)}
                           onKeyPress={(e) => {
                              if (!e) e = window.event;
                              var keyCode = e.code || e.key;
                              if (keyCode == "Enter"){
                                 requestLogin()
                              }
                             return false 
                           }}/>
                  <StyledLoginButton id="myBtn" size="20" onClick={() => requestLogin()}>Enter
                  </StyledLoginButton>
            <Notification notify={notify} setNotify={setNotify}/>
         </StyledLogin>
      </StyledContainer>
   )
}

export default Login 
