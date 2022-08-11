

import {StyledInputLogin, StyledContainer, StyledLogin, StyledHomeButton, StyledLoginP} from "../components/Styles"
// import {StyledContentAdd, StyledFrom, StyledInput, StyledLabel, StyledText, StyledInputFile, StyledAdd}from "../components/StyleProduits.js"
import { useState } from "react";
import Axios from "axios"

const Login = () => {
   const [login, setLogin] = useState({
      login: "",
      pass: "",
   })

   function requestLogin(){
      Axios.post('http://localhost:3001/auth', {
         User: login.login,
         Pass: login.pass,
      }).then(() => {console.log("Success")});
   }

	function handChange(event){
		setLogin({...login,[event.target.name]: event.target.value});
	}	
   return(
      <StyledContainer>
      <StyledLogin>
      <StyledLoginP>Login</StyledLoginP>
      <StyledInputLogin placeholder="login" name="login" onChange={(e) => handChange(e)}/>
      <StyledLoginP>Password</StyledLoginP>
      <StyledInputLogin placeholder="password" type="password" name="pass" onChange={(e) => handChange(e)}/>
               <StyledHomeButton size="20" to="/Dashboard" onClick={() => console.log(login)}>Enter
               </StyledHomeButton>
      </StyledLogin>
      </StyledContainer>
   )
}

export default Login 
