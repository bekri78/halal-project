import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import "./SelectionGrid.css";
import CardSelection from "../cardSelection/CardSelection";
import pictureData from "../../../ressource/data/cardSelection";
export default function SelectionGrid() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: 20,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Container>

       
      <Row style={{ marginBottom: "5%" }}>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="d-flex justify-content-center align-items-center mb-auto flex-column "
        >
          <div className="containerBadge">
            <div className="badgeContente">
              <span> La selection de la semaine</span>
            </div>
            <h2 className="badgeRestoH2">Les 5 restaurants du moment</h2>
            <p className="badgeTexte">
              Decouvrez une selection de restaurants chaque  semaine , de
              qualités pour tous les gouts et tous les budgets.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          className="d-flex justify-content-center align-items-center mb-auto  "
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              flexWrap: "wrap",
            }}
          >
            {pictureData &&
              pictureData.map((el, index) => (
                <CardSelection
                  key={index}
                  data={el.image}
                  nom={el.nom}
                  note={el.note}
                  ville={el.ville}
                  texte={el.texte}
                />
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
