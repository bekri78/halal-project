import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";
import Restaurateur from "../../ressource/img/restaurateur.webp";
import "./Apropos.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Apropos() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section style={{ marginTop: "5%", marginBottom: "5%" }}>
      <Container>
        <Row>
          <Col>
            <h2 className="Apropos_h2">A propos de HalalAssiette</h2>
          </Col>
        </Row>
        <Col>
          <div>
            <p className="Apropos_p">
              Vous adorez dénicher de nouveaux restaurants tendance à Paris,
              mais vous appréciez aussi les brunchs entre amis le dimanche à
              Bordeaux ou les dîners en amoureux à Lille ? Vous pensez que rien
              ne vaut un bon resto italien mais vous aimez sortir de la routine
              avec un restaurant japonais ou indien ? Alors, venez découvrir les
              meilleures tables du moment sur TheFork, parmi une sélection de
              plus de 60 000 adresses dans le monde entier.
            </p>
            <p className="Apropos_p">
              Tous les jours, retrouvez des promotions allant jusqu’à -50% sur
              la carte. De quoi se faire plaisir sans se ruiner ! TheFork est le
              moyen le plus rapide, disponible 24h/24, pour trouver un bon plan
              resto près de chez vous, ou une expérience culinaire partout
              ailleurs. Laissez-vous guider par plus de 20 millions d’avis
              vérifiés de notre communauté et partagez les vôtres. Seuls les
              clients ayant honoré leur réservation peuvent déposer un avis et
              poster leurs photos de plats.
            </p>
            <p className="Apropos_p">
              Pour toutes les envies et toutes les occasions, réservez votre
              restaurant gratuitement en 3 clics avec confirmation immédiate.
            </p>
          </div>
        </Col>
        <Row>
          <Col>
            <h2   className="Apropos_h2_restaurateur">
              {" "}
              Êtes-vous un restaurateur ?
            </h2>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{ display: "flex", justifyContent: "center" }}
            data-aos="fade-up"
     data-aos-duration="1000"
          >
            <div  >
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <img
                  src={Restaurateur}
                  alt="resturateur"
                  className="restaurateur"
                />
              </div>
            </div>
            <div style={{ border: "1px solid  ", borderColor:'#ddd',borderRadius:'0.25rem',   boxShadow: '0 3px 3px rgba(0,0,0,0.16), 0 3px 3px rgba(0,0,0,0.23)'}}>
              <div className="conteneur_restaurateur">
                <h4>Inscrivez votre restaurant</h4>
                <p>
                  Donnez-nous plus de détails, et nous vous contacterons le plus
                  rapidement possible.
                </p>
                <Button  style={{width:"40%"}}variant="outlined" color="success">Voir plus d'informations</Button>
                <h4>Deja client ?</h4>
                <p>
                Connectez-vous à TheFork Manager et contactez-nous avec le Chat.
                </p>
                <Button   style={{width:"30%"}}variant="outlined"color="success">Se connecter</Button>
              </div>
              
              
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
