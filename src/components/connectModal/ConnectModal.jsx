import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Login from "./Login";
import SignUp from "./SignUp";

const ConnectModal = () => {
  const [signUp, setSignUp] = useState(true);
  return (
    <div className="connect-modal" style={{ width: "100%", margin: "auto" }}>
      <div className="header-btn">
      <Stack spacing={1} direction="row">
     
      <Button variant= { signUp ? "contained" :"outlined" }  onClick={() => {
            setSignUp(true);
          }}>S'inscrire</Button>
      <Button variant= { signUp ? "outlined" :"contained" }   onClick={() => {
            setSignUp(false);
          }}>Se Connecter</Button>
    </Stack>
        
      </div>

      {signUp ? <SignUp /> :<Login />  }
    </div>
  );
};

export default ConnectModal;
