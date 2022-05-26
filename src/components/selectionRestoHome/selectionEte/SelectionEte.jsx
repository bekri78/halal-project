import React, { useEffect, useRef } from "react";
import pictureData from "../../../ressource/data/cardSelection";
import CardSelection from "../cardSelection/CardSelection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cocktail from "../../../ressource/img/cocktailBanniere.png";
import lottie from "lottie-web";
import "./SelectionEte.css";

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
  return (
    <Container>
      <Row>
        <Col
          className="m-auto d-flex justify-content-center"
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <div className="conteneur-img-cocktail">
            <img className="imgCocktail" src={Cocktail} alt="cocktail" />
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
          <div ref={container}></div>
          <p style={{ textAlign: "start" }}>
            Lorem ipsum dolor sit amet. Id iure animi ut inventore consequatur
            non ducimus vitae et dolores commodi et sapiente autem. In nesciunt
            consequatur cum voluptatem quibusdam vel aspernatur dolores qui
            aperiam qui impedit labore non laborum veritatis et itaque
            dignissimos.
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
      <Row style={{ marginTop: "5%" }}>
        <Col
          className="d-flex justify-content-start"
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          {" "}
          <h2 style={{ fontSize: "1.375rem", paddingBottom: "0.5rem" }}>
            Notre selection été 2022
          </h2>
        </Col>
        <Col
          style={{ flexWrap: "wrap" }}
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
                  bar={true}
                />
              );
            })}
        </Col>
      </Row>
    </Container>
  );
}
