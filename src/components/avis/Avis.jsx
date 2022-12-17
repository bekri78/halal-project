import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rating from "@mui/material/Rating";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Box from "@mui/material/Box";
import "./Avis.css";
import halalCertificat from '../../ressource/img/hala-certification-logo.webp'
import avs from '../../ressource/img/avs.png'
import halalCertifLogo from '../../ressource/img/halal-logo-certif-removebg-preview.png'
import certficat_m from '../../ressource/img/certification_m_halal-removebg-preview.png'
import halal_europe from '../../ressource/img/halal-europe-removebg-preview.png'
export default function Avis() {

  return (
    <Container style={{ marginTop: "5%" }}>
      <Row className=" d-flex flex-column">
        <Col className="d-flex justify-content-center align-items-center  ">
          <div className="container-el-title-avis">
            <h2 className="title-avis-h2">Votre avis compte</h2>
            <h2 className="title-avis-h2-2">1,500,49+ Commentaires </h2>
            <p className="text-avis">
              Many Fortune 500 companies, startups, universities and
              governmental institutions love Creative Tim's products.
            </p>
          </div>
        </Col>
        <Col style={{ marginTop: "5%" }} className="d-flex justify-content-center align-items-center  ">
          <Box className="box-commentaire ">
            <div className="container-commentaire-h6-span">
              <h6 className="commentaire-card colored-title-commentaire"> Karim </h6>
              <span>
                {" "}
                <AccessTimeIcon fontSize="small" /> 5 jours
              </span>
            </div>
            <p className="commentaire-texte black-comment">I found solution to all my design needs from Creative Tim.
             I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!! </p>
            <h4 style={{ display:'flex', justifyContent:'flex-start'}}>
              {" "}
              <Rating color="primary" name="disabled" value={4}   />
            </h4>
          </Box>
          <Box className="box-commentaire color-commentaire">
            <div className="container-commentaire-h6-span">
              <h6 className="commentaire-card  ">Yacine </h6>
              <span style={{color:'white'}}>
                {" "}
                <AccessTimeIcon fontSize="small" /> 1 semaine
              </span>
            </div>
            <p className="commentaire-texte">I found solution to all my design needs from Creative Tim.
             I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!! </p>
            <h4 style={{ display:'flex', justifyContent:'flex-start'}}>
              {" "}
              <Rating name="disabled" value={5}   />
            </h4>
          </Box>
          <Box className="box-commentaire">
            <div className="container-commentaire-h6-span">
              <h6 className="commentaire-card colored-title-commentaire"> Djamela</h6>
              <span>
                {" "}
                <AccessTimeIcon fontSize="small" /> 1 mois
              </span>
            </div>
            <p className="commentaire-texte black-comment">I found solution to all my design needs from Creative Tim.
             I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!! </p>
            <h4 style={{ display:'flex', justifyContent:'flex-start'}}>
              {" "}
              <Rating color="secondary" name="disabled" value={4}   />
            </h4>
          </Box>
        </Col>
      </Row>
      <Row style={{marginTop:'10%', marginBottom:"10%"}}>
          <Col>
          <div className="partenaire-img">
              <img src={halalCertificat}alt='logo'/>
              <img src={avs}alt='logo'/>
              <img src={halalCertifLogo}alt='logo'/>
              <img src={certficat_m}alt='logo'/>
              <img src={halal_europe}alt='logo'/>

          </div>
          </Col>
      </Row>
    </Container>
  );
}
