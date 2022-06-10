import React, { useEffect, useRef } from "react";
import pictureData from "../../ressource/data/cardSelection";
import SelectionGrid from "./selectionGrid/SelectionGrid";
import CardSelection from "./cardSelection/CardSelection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Divider from "@mui/material/Divider";
import lottie from "lottie-web";
import "./Selection.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SelectionHome() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../ressource/lottie/women-recherche-food.json"),
    });
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="conteneur-selection">
      <Container style={{ paddingTop: "2%", paddingBottom: "4%" }}>
        <Row>
          <Col
            className="m-auto d-flex justify-content-center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <section className="conteneur-number">
              <div className="conteneur-number-2">
                <div
                  className="conteneur-number-3"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h1 className="number-title">
                    {" "}
                    <span className="number-restaurant-500">+</span>
                  </h1>
                  <h5 className="number-subtitle"> Restaurants </h5>
                  <p className="number-text">
                    Une large selection de restaurants en exclusivités sur l'ile
                    de france
                  </p>
                </div>
                <Divider orientation="vertical" flexItem />
                <div
                  className="conteneur-number-3"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h1 className="number-title">
                    {" "}
                    <span className="number-restaurant-200">+</span>
                  </h1>
                  <h5 className="number-subtitle">Partenaires</h5>
                  <p className="number-text">
                    Des partenariats de qualités pour tous vos besoins{" "}
                  </p>
                </div>
                <Divider orientation="vertical" flexItem />
                <div
                  className="conteneur-number-3"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h1 className="number-title">
                    <span className="number-restaurant-20"></span>
                  </h1>
                  <h5 className="number-subtitle">Pays</h5>
                  <p className="number-text">
                    A l'international nous somme present pour vous guider
                  </p>
                </div>
              </div>
            </section>
          </Col>
        </Row>
        <Row style={{ marginTop: "2%" }}>
          <Col
            className="d-flex justify-content-start align-items-center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <section className="conteneur-grid-resto-selection">
              <SelectionGrid />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
