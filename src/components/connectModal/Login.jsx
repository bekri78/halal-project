import React, { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { auth } from "../../utils/Firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const loginEmail = useRef();
  const loginPassword = useRef();
  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail.current.value,
        loginPassword.current.value
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };
  return (
    <div
      className="container-inscription"
      style={{ width: "100%", margin: "auto" }}
    >
      <form onSubmit={(e) => handleLogin(e)}>
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
          <p> Connexion</p>
          <TextField
            fullWidth
            required
            id="outlined-basic"
            label="Adresse Email"
            variant="outlined"
            inputRef={loginEmail}
          />
          <TextField
            fullWidth
            required
            id="outlined-basic"
            label="Mot de passe"
            variant="outlined"
            inputRef={loginPassword}
          />
           
          <Button fullWidth type="submit" variant="contained">
            Se Connecter
          </Button>
          {error && (
            <Alert severity="error">Email ou mot de passe incorrecte !</Alert>
          )}
        </Stack>
      </form>
    </div>
  );
};

export default Login;
