import React, { useEffect, useRef } from "react";
import pictureData from "../../ressource/data/cardSelection";
import CardSelection from "./cardSelection/CardSelection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FoodBanniere from "../../ressource/img/SELECTION ETE 2022.png";
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
                  <h5 className="number-subtitle"> Restaurants halal</h5>
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
                    Des partenariats de quailités pour tous vos besoins{" "}
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
            {/* <div  data-aos="fade-up"
     data-aos-duration="1000" className="conteneur-img-cocktail">
            <img className="imgCocktail" src={FoodBanniere} alt="cocktail" />
          </div> */}
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
            <div
              style={{ width: "25%", marginBottom: "2%" }}
              ref={container}
            ></div>
            <p
              style={{
                textAlign: "start",
                color: "hsl(220, 9%, 26%)",
                fontSize: "1rem",
                fontWeight: 300,
              }}
            >
              Lorem ipsum dolor sit amet. Id iure animi ut inventore consequatur
              non ducimus vitae et dolores commodi et sapiente autem. In
              nesciunt consequatur cum voluptatem quibusdam vel aspernatur
              dolores qui aperiam qui impedit labore non laborum veritatis et
              itaque dignissimos.
              <br></br>
              Est nobis ratione est omnis et deleniti adipisci sed galisum autem
              non cumque recusandae. Sed iure vero nam quidem sequi dolorem iste
              ea ducimus nihil.
              <br></br>
              Ut quod voluptas id commodi sint aut optio fugiat in maxime
              assumenda est cumque accusantium nam architecto dolores. Eum saepe
              galisum et deserunt fuga quo facere assumenda aut libero
              exercitationem est similique.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            className="d-flex justify-content-start"
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            {" "}
            <h2 style={{ fontSize: "1.375rem", paddingBottom: "0.5rem" }}>
              Notre selection du moment
            </h2>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center m-auto "
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            {pictureData &&
              pictureData.map((data, index) => {
                return (
                  <CardSelection
                    key={index}
                    image={data.image}
                    nom={data.nom}
                    note={data.note}
                    adress={data.adress}
                    bar={false}
                  />
                );
              })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
