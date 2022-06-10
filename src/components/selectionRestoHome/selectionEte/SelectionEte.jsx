import React, { useEffect, useRef } from "react";
import pictureData from "../../../ressource/data/cardSelection";
import CardSelection from "../cardSelection/CardSelection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lottie from "lottie-web";
import "./SelectionEte.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import cardAsie from '../../../ressource/data/cardAsie'
import cardFrance from '../../../ressource/data/cardFrancais'
import cardIndien from '../../../ressource/data/cardIndien'
import cardTurc from '../../../ressource/data/cardTurc'
import BoxCard from "./box-card/BoxCard";

export default function SelectionEte() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../ressource/lottie/food-toss.json"),
    });
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Container>
      <Row>
        <Col
          className="m-auto d-flex justify-content-center flex-column align-items-center"
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <div className="containerBadge">
            <div className="badgeContente">
              <span> Categories exclusives</span>
            </div>
            <h2 className="badgeRestoH2">Les restaurants par catégories</h2>
            <p className="badgeTexte">
             Nous vous proposons des restaurants de differrents gouts et horizon afin que puissez trouvez votre bonheur.
            </p>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "5%" }}>
        <Col
           className="d-flex justify-content-start align-items-center"
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
              <Box className="container-title-texte-column">
                <h3 className="designBlocks">Asie</h3>
                <p className="">
                  A selection of 45 page sections that fit perfectly in any
                  combination
                </p>
              </Box>
            </Grid>
            <Grid item={true} xs={12} lg={9}>
              <Grid container spacing={3}>
               {
               cardAsie && ( cardAsie.map((el, index)=>(
                 <BoxCard
                  key={index}
                  url={el.url}
                  alt={el.alt}
                  title={el.title}
                  texte={el.texte}
                  />
                 )))
               }  
              </Grid>
            </Grid>
          </Grid>
        </Col>
      </Row>
      <Row style={{ marginTop: "5%" }}>
        <Col
          className="d-flex justify-content-start"
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
            <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
              <Box className="container-title-texte-column">
                <h3 className="designBlocks">Gastronomique</h3>
                <p className="">
                Une selection de restaurants français qui allient plaisir et convivialités.
                </p>
              </Box>
            </Grid>
            <Grid item={true} xs={12} lg={9}>
              <Grid container spacing={3}>
               {
               cardFrance && ( cardFrance.map((el, index)=>(
                 <BoxCard
                  key={index}
                  url={el.url}
                  alt={el.alt}
                  title={el.title}
                  texte={el.texte}
                  />
                 )))
               }  
              </Grid>
            </Grid>
          </Grid>
        </Col>
        </Row>
        <Row style={{ marginTop: "5%" }}>
        <Col
          className="d-flex justify-content-center align-items-center m-auto "
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
              <Box className="container-title-texte-column">
                <h3 className="designBlocks">Fast Food</h3>
                <p className="">
                Une selection de restaurants français qui allient plaisir et convivialités.
                </p>
              </Box>
            </Grid>
            <Grid item={true} xs={12} lg={9}>
              <Grid container spacing={3}>
               {
               cardFrance && ( cardFrance.map((el, index)=>(
                 <BoxCard
                  key={index}
                  url={el.url}
                  alt={el.alt}
                  title={el.title}
                  texte={el.texte}
                  />
                 )))
               }  
              </Grid>
            </Grid>
          </Grid>
        </Col>
      </Row>


      <Row style={{ marginTop: "5%" }}>
        <Col
          className="d-flex justify-content-center align-items-center m-auto "
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
              <Box className="container-title-texte-column">
                <h3 className="designBlocks">Indien</h3>
                <p className="">
                Une selection de restaurants Indiens aux saveurs uniques.
                </p>
              </Box>
            </Grid>
            <Grid item={true} xs={12} lg={9}>
              <Grid container spacing={3}>
               {
               cardIndien && ( cardIndien.map((el, index)=>(
                 <BoxCard
                  key={index}
                  url={el.url}
                  alt={el.alt}
                  title={el.title}
                  texte={el.texte}
                  />
                 )))
               }  
              </Grid>
            </Grid>
          </Grid>
        </Col>
      </Row>


      

      <Row style={{ marginTop: "5%" }}>
        <Col
          className="d-flex justify-content-center align-items-center m-auto "
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
              <Box className="container-title-texte-column">
                <h3 className="designBlocks">Turc</h3>
                <p className="">
                Une selection de restaurants Turc rien que pour vous.
                </p>
              </Box>
            </Grid>
            <Grid item={true} xs={12} lg={9}>
              <Grid container spacing={3}>
               {
               cardTurc && ( cardTurc.map((el, index)=>(
                 <BoxCard
                  key={index}
                  url={el.url}
                  alt={el.alt}
                  title={el.title}
                  texte={el.texte}
                  />
                 )))
               }  
              </Grid>
            </Grid>
          </Grid>
        </Col>
      </Row>
    </Container>
  );
}
