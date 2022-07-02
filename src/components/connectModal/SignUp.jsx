import React, { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { auth } from "../../utils/Firebase.config";

const SignUp = () => {
  const registerEmail = useRef();
  const registerPassword = useRef();
const [displayName, setDisplayName]= useState('')


  const handleRegister = (e) => {
    e.preventDefault();

    try {
      auth.createUserWithEmailAndPassword(
        registerEmail.current.value,
        registerPassword.current.value
      ).then(async (userAuth)=>{
        await userAuth.user.updateProfile({
            displayName
        })
          console.log(userAuth)
          window.location.reload()
      })
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className="container-inscription"
      style={{ width: "100%", margin: "auto" }}
    >
      <form onSubmit={(e) => handleRegister(e)}>
        <Stack
          spacing={2}
          style={{
            margin: "auto",
            width: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <p> S'inscrire</p>
          <TextField
            fullWidth
            required
            id="outlined-basic"
            label="Pseudo"
            variant="outlined"
            onChange={(e)=> setDisplayName(e.target.value)}
          />

          <TextField
            fullWidth
            required
            id="outlined-basic"
            label="Adresse Email"
            variant="outlined"
            type="email"
            inputRef={registerEmail}
          />
          <TextField
            fullWidth
            required
            id="outlined-basic"
            label="Mot de passe"
            variant="outlined"
            type="password"
            inputRef={registerPassword}
          />
          <Button type="submit" fullWidth variant="contained">
            Valider Inscription
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default SignUp;
