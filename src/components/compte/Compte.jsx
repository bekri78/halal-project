import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/Firebase.config";
import TemporaryDrawer from "./menu/Menu";
import { Container, Col, Row } from "react-bootstrap";
import ordi from "../../ressource/img/banner-illustration.png";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import "./Compte.css";

export default function Compte() {
  const [user, setUser] = useState(null);
  console.log(user ? user.uid : "paas encore la");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  return (
    <>
      {user && (
        <Container>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            {" "}
            <h4
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.375,
              }}
            >
              {" "}
              Bonjour {user.displayName}
            </h4>{" "}
          </div>
          <TemporaryDrawer />
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 32,
                  backgroundColor: "rgb(117, 130, 235)",
                  borderRadius: 12,
                }}
              >
                <img
                  style={{ width: "20%", marginRight: 32 }}
                  src={ordi}
                  alt="ordi"
                />
                <Stack spacing={2} direction="column" textAlign="start">
                  <Chip
                    label="Nouveau"
                    style={{
                      width: "15%",
                      backgroundColor: "rgb(16, 185, 129)",
                      color: "rgb(17, 24, 39)",
                    }}
                  />
                  <h2
                    style={{
                      color: "rgb(17, 24, 39)",
                      fontSize: "2rem",
                      fontWeight: 700,
                      lineHeight: 1.375,
                      margin: "16px 0px 0px",
                    }}
                  >
                    {" "}
                    Bienvenue dans votre Dashboard
                  </h2>
                  <p>
                    {" "}
                    Your dashboard has been improved! Explore new features like
                    Notifications, Search, Jobs Platform and more
                  </p>
                  <Button
                    variant="contained"
                    style={{
                      width: "20%",
                      backgroundColor: "rgb(16, 185, 129)",
                      color: "rgb(17, 24, 39)",
                    }}
                  >
                    Contained
                  </Button>
                </Stack>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: 50 }}>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: "100%",
                    height: 200,
                  },
                }}
              >
                <Paper
                  elevation={3}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    
                    flexDirection: "column",
                    backgroundColor: "rgb(17, 24, 39)",
                    width:"100%"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress
                      variant="determinate"
                      value={50}
                      style={{ margin: 5 }}
                    />{" "}
                    <h3 style={{ margin: 5 , color:"rgb(117, 130, 235)"}}> Hallal coins</h3>
                  </div>
                  <div >
                    {" "}
                    <p style= {{ color:"rgb(117, 130, 235)"}}> Vos nombres de point sur la hala market place</p>
                    <Divider style = {{ color:"rgb(117, 130, 235)"}} />

                  <p style={{color:"rgb(117, 130, 235)",   display: "flex",
                    justifyContent: "center", alignItems:"center"}}>dihhb</p>
                  </div>
                </Paper>
              </Box>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: "100%",
                    height: 200,
                  },
                }}
              >
             <Paper
                  elevation={3}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    
                    flexDirection: "column",
                    backgroundColor: "rgb(17, 24, 39)",
                    width:"100%"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress
                      variant="determinate"
                      value={50}
                      style={{ margin: 5 }}
                    />{" "}
                    <h3 style={{ margin: 5 , color:"rgb(117, 130, 235)"}}> Hallal coins</h3>
                  </div>
                  <div >
                    {" "}
                    <p style= {{ color:"rgb(117, 130, 235)"}}> Vos nombres de point sur la hala market place</p>
                    <Divider style = {{ color:"rgb(117, 130, 235)"}} />

                  <p style={{color:"rgb(117, 130, 235)",   display: "flex",
                    justifyContent: "center", alignItems:"center"}}>dihhb</p>
                  </div>
                </Paper>
              </Box>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
