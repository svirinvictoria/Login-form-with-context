import React from "react";

const LoginContext = React.createContext({
   loginState: '',
   enteredName:'',
   changeLoginState: ()=>{},
   changeEnteredName: ()=>{}, 
});

export default LoginContext;