import React, { useRef, useState, useEffect } from "react";
import { auth } from "../../utils/Firebase.config";
import MailSend from "../../ressource/img/mail_sent.svg";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AOS from "aos";
import "aos/dist/aos.css";

const SignUp = () => {
  const registerEmail = useRef();
  const registerPassword = useRef();
  const [successRegister, setSuccessRegister] = useState(false);
  const [displayName, setDisplayName] = useState("");
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    try {
      auth
        .createUserWithEmailAndPassword(
          registerEmail.current.value,
          registerPassword.current.value
        )
        .then(async (userAuth) => {
          await userAuth.user.updateProfile({
            displayName,
          });
          await userAuth.user.sendEmailVerification();
          await setSuccessRegister(true)
          //window.location.reload()
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {successRegister ? (
        <div style={{ width: "100%", margin: "auto" }}>
          <Stack
            sx={{
              width: "100%",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            spacing={2}
          >
            <img
              src={MailSend}
              alt="email send"
              style={{ width: "30%" }}
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <Typography variant="h5" component="div" gutterBottom>
              Felicitation ! vous êtes à deux doigts de devenir membre.
            </Typography>
            <Typography variant="h6" component="div" gutterBottom>
              Un email de confirmation viens de vous être envoyé.
            </Typography>
            <Alert severity="info">Pensez a verifier vos spams !</Alert>
          </Stack>
        </div>
      ) : (
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
                onChange={(e) => setDisplayName(e.target.value)}
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
      )}
    </>
  );
};

export default SignUp;
