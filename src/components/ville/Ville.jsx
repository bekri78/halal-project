import React from 'react'
import ville from '../../ressource/data/ville'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BoxVille from "./boxVille/BoxVille";
import './Ville.css'

export default function Ville() {
  return (
      <Container>

 
    <Row style={{ marginTop: "5%" }}>
    <Col
       className="d-flex justify-content-start align-items-center"
      xs={12}
      sm={12}
      md={12}
      lg={12}
    >
      <Grid container spacing={3}>
      <Grid item={true} xs={12} lg={9}>
          <Grid container spacing={3}>
           {
           ville && ( ville.map((el, index)=>(
             <BoxVille
              key={index}
             ville={el.ville}
             alt={el.alt}
             url={el.url}


              />
             )))
           }  
          </Grid>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box className="container-title-texte-column">
            <h3 className="designBlocks">Villes</h3>
            <p >
              Les villes de frances les plus populaire, proposant  le plus de restaurants halal de qualités.
            </p>
          </Box>
        </Grid>
        
      </Grid>
    </Col>
  </Row>
  </Container>
  )
}
