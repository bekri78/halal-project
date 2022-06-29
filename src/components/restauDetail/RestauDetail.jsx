import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AutoCompleteResto from "../autoCompleteResto/AutoCompleteResto";
import PredictionsOnInputChange from "../autoComplete/InputSearch";

import Divider from "@mui/material/Divider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import RoomIcon from "@mui/icons-material/Room";
import Button from "@mui/material/Button";
import UserComment from "../userComment/UserComment";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EuroIcon from "@mui/icons-material/Euro";
import HalalLogo from "../../ressource/img/halal-food-logo.png";
import Cadeau from "../../ressource/img/cadeau.svg";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import imgBoss from "../../ressource/img/img-boss-test.jpg";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CellWifiIcon from "@mui/icons-material/CellWifi";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import WcIcon from "@mui/icons-material/Wc";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TableBarIcon from "@mui/icons-material/TableBar";
import PetsIcon from "@mui/icons-material/Pets";
import List from "@mui/material/List";
import "./RestauDetail.css";
import Footer from "../footer/Footer";

export default function RestauDetail(props) {
  const { id } = useParams();
  const key = "AIzaSyAURsom7c-jmbNERN0wVqb4OzVten2Hy24"; // clef google map api
  const [restoDetail, setRestoDetail] = useState([]);
  useEffect(() => {
    resquestApi();
  }, [id]);

  const resquestApi = async () => {
    console.log("je suis dans detail");
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=AIzaSyATaVEl_K2D9IcWPICwcog27_C1TsOQGr0`;
    try {
      const resquest = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
      );
      const json = await resquest.json();
      const resultat = await JSON.parse(json.contents);
      setRestoDetail(resultat.result);
      console.log("detail:", resultat.result);
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handlePopoverOpen2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handlePopoverClose2 = () => {
    setAnchorE2(null);
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);

  return (
    <>
      <Container>
        <Row
          style={{
            position: "sticky",
            top: "0px",
            backgroundColor: "#ffff",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
            }}
          >
            <img
              src={HalalLogo}
              alt=" halal-logo"
              style={{ width: "8%", position: "absolute", left: "10px" }}
            />

            <div style={{ width: "40%" }}>
              <PredictionsOnInputChange />
            </div>
            <div style={{ marginLeft: "-10px" }}>
              <AutoCompleteResto />
            </div>
          </div>
          <div style={{ marginTop: "1%", marginBottom: "1%" }}>
            <Divider />
          </div>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="conteneur-cadeaux">
              <div>
                <img src={Cadeau} alt="cadeau" style={{ marginRight: "5px" }} />
              </div>
              <div>
                <div className="conteneur-cadeaux-span1">
                  <span>
                    {" "}
                    NOUVEAU ! Découvrez les Cartes Cadeaux Halal Food :
                  </span>
                </div>
                <div className="conteneur-cadeaux-span2">
                  <span>
                    Offrez une expérience attendue par tous : une sortie au
                    restaurant ! Et soutenez les restaurants à leur réouverture
                    !
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <h1 className="titleResto">
                {" "}
                **{restoDetail.name}{" "}
                <span className="ouvertAujour">
                  {restoDetail.open_now ? "Ouvert aujourd'hui" : "FERME"}
                </span>{" "}
              </h1>

              <p> </p>
            </div>
            <div style={{ paddingLeft: "80px", paddingRight: "80px" }}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                {" "}
                <span className="commentairesNumber">
                  <StarIcon fontSize="small" />
                  {restoDetail.rating}
                </span>{" "}
                -{" "}
                {restoDetail.reviews ? (
                  <p className="commentairesNumber commentaireDecoration">
                    {restoDetail.reviews.length} commentaires
                  </p>
                ) : (
                  <p className="commentairesNumber commentaireDecoration">
                    Aucun commentaires
                  </p>
                )}{" "}
                -
                <p className="commentairesNumber commentaireDecoration">
                  {restoDetail.formatted_address}
                </p>
              </span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            {restoDetail.photos && (
              <div className="containerGrid">
                <div
                  className="ImgPrincipal"
                  style={{
                    backgroundImage: `url( https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restoDetail.photos[0].photo_reference}&sensor=false&key=AIzaSyATaVEl_K2D9IcWPICwcog27_C1TsOQGr0)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {" "}
                </div>
                <div
                  className="ImgUn"
                  style={{
                    backgroundImage: `url( https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restoDetail.photos[1].photo_reference}&sensor=false&key=AIzaSyATaVEl_K2D9IcWPICwcog27_C1TsOQGr0)`,
                  }}
                ></div>
                <div
                  className="ImgDeux"
                  style={{
                    backgroundImage: `url( https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restoDetail.photos[2].photo_reference}&sensor=false&key=AIzaSyATaVEl_K2D9IcWPICwcog27_C1TsOQGr0)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  className="ImgTrois"
                  style={{
                    backgroundImage: `url( https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restoDetail.photos[3].photo_reference}&sensor=false&key=AIzaSyATaVEl_K2D9IcWPICwcog27_C1TsOQGr0)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  className="ImgQuatre"
                  style={{
                    backgroundImage: `url( https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restoDetail.photos[4].photo_reference}&sensor=false&key=AIzaSyATaVEl_K2D9IcWPICwcog27_C1TsOQGr0)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            )}
          </Col>
        </Row>

        <Row style={{ marginTop: "2%" }}>
          <Col xs={12} sm={8} md={8} lg={8}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 80,
                paddingBottom: 20,
              }}
            >
              <div className="container-specialite">
                <h2 className="primary-texte-specialite">
                  Restaurant sur place : Specialite Food ⸱ Chez Diane
                </h2>
                <p className="secondary-texte-specialite">
                  4 voyageurs - chambre - lits - salle de bain
                </p>
              </div>
              <div>
                {" "}
                <Avatar sx={{ width: 56, height: 56 }} src={imgBoss}></Avatar>
              </div>
            </div>
            <div style={{ paddingLeft: 80, paddingBottom: 32 }}>
              <Divider />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={8} md={8} lg={8}>
            <div style={{ paddingLeft: 80 }}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <LocalPhoneIcon />

                <> {restoDetail.formatted_phone_number}</>
              </span>{" "}
              <p className="info-resto-details">
                Vous pouvez contacter le restaurant pendant les horaires
                d'ouvertures.
              </p>
            </div>

            <div style={{ paddingLeft: 80 }}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {" "}
                <MeetingRoomIcon />
                <> Arrivée autonome </>
              </span>{" "}
              <p className="info-resto-details">
                Vous pouvez entrer dans les lieux sans reservation.
              </p>
            </div>

            <div style={{ paddingLeft: 80 }}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <EuroIcon />

                <> Budget</>
              </span>{" "}
              <p className="info-resto-details">
                Budget indicatif suivant la carte et les retours clients.
              </p>
            </div>

            <div style={{ paddingLeft: 80 }}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {" "}
                <RoomIcon /> <> Idéalement situé</>{" "}
              </span>
              <p className="info-resto-details">
                {" "}
                100 % des clients ont attribué 5 étoiles à l'emplacement du
                restaurant.
              </p>
            </div>

            <div style={{ paddingLeft: 80 }}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {" "}
                <LocalParkingIcon /> <> Place de parking disponible</>
              </span>
            </div>
            <div style={{ paddingLeft: 80, paddingTop: 32 }}>
              <Divider />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={8} md={8} lg={8}>
            <div
              style={{
                paddingLeft: 80,
                paddingTop: 32,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <MenuBookIcon style={{ marginBottom: 10 }} />
              <p style={{ textAlign: "start", margin: "auto" }}>
                Coup de coeur assuré ! Un appartement avec un vrai cachet, plein
                de charme d'autant plus le soir que la journée grâce a ces
                filament de lumière situé en plein cœur de Paris dans le
                quartier le plus animé et touristique "Le Marais", ce magnifique
                appartement vient d’être entièrement rénové par un Architecte
                pointilleux sur la décoration, très atypique donnant sur une
                cour arborée ensoleillé, agréable et calme. Lit hôtel de grande
                qualité !
              </p>
            </div>
            <div style={{ paddingLeft: 80, paddingTop: 32 }}>
              <Divider />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={8} md={8} lg={8}>
            <div style={{ paddingLeft: 80 }}>
              <h2 style={{ textAlign: "start" }}>Où vous allez manger </h2>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  cursor: "pointer",
                  width: 223.43,
                  height: 399.42,
                }}
              >
                <div
                  className="imgBox"
                  style={{
                    width: 300,
                    height: 200,
                    borderRadius: 12,
                    // backgroundImage: `url( https://maps.googleapis.com/maps/api/place/photo?maxwidth=480&photoreference=${restoDetail.photos[3].photo_reference}&sensor=false&key=AIzaSyATaVEl_K2D9IcWPICwcog27_C1TsOQGr0)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div>
                  <div
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <h6 className="title-carte-test">Table duo</h6>
                  </div>
                </div>
              </Box>
              <Box
                style={{
                  cursor: "pointer",
                  width: 223.43,
                  height: 399.42,
                }}
              >
                <div
                  className="imgBox"
                  style={{
                    width: 300,
                    height: 200,
                    borderRadius: 12,
                    // backgroundImage: `url( https://maps.googleapis.com/maps/api/place/photo?maxwidth=480&photoreference=${restoDetail.photos[4].photo_reference}&sensor=false&key=AIzaSyATaVEl_K2D9IcWPICwcog27_C1TsOQGr0)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div>
                  <div
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <h6 className="title-carte-test">Table a plusieurs</h6>
                  </div>
                </div>
              </Box>
            </div>
            <div style={{ paddingLeft: 80 }}>
              <Divider />
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={8} md={8} lg={8}>
            <div style={{ paddingLeft: 80 }}>
              <h2 style={{ textAlign: "start" }}>
                Ce que propose le restaurant{" "}
              </h2>
            </div>
            <div
              style={{
                marginTop: "5%",
                paddingLeft: 80,
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <p className="icone-proposition-resto">
                {" "}
                <span>
                  <AcUnitIcon />
                </span>{" "}
                Climatiseur
              </p>
              <p className="icone-proposition-resto">
                {" "}
                <span>
                  <CellWifiIcon />
                </span>{" "}
                Wifi
              </p>
              <p className="icone-proposition-resto">
                {" "}
                <span>
                  <LiveTvIcon />
                </span>{" "}
                Télé
              </p>
              <p className="icone-proposition-resto">
                {" "}
                <span>
                  <WcIcon />
                </span>{" "}
                WC
              </p>
              <p className="icone-proposition-resto">
                {" "}
                <span>
                  <DirectionsCarIcon />
                </span>
                Place de stationnement Payant
              </p>
              <p className="icone-proposition-resto">
                {" "}
                <span>
                  <PetsIcon />
                </span>
                Animaux acceptés
              </p>
              <p className="icone-proposition-resto">
                {" "}
                <span>
                  <TableBarIcon />
                </span>
                Terrasse
              </p>
            </div>

            <div style={{ paddingLeft: 80 }}>
              <div className="sanitaire">
                <div className="vnu9I">
                  <span>
                    Ce restaurant applique les mesures sanitaires adaptées*
                  </span>
                </div>
                <Accordion style={{ background: "#eff7fa", boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{ color: "#006399" }}>
                      Voir plus d'information
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Augmentation des féquences de nettoyage, ( tables,
                      toilettes etc ...)
                    </Typography>
                    <Typography>
                      * Cette information est déclarée par le restaurant
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            
        <div style={{ paddingLeft: 80 , marginTop:'5%'}}>
              <Divider />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={8} md={8} lg={8}>
              <div style={{ paddingLeft: 80 }}>

            
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: 10,
                marginTop: "5%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{ marginRight: 10 }}
                  className="css-qupkco e1xxesyf0"
                >
                  <span className="rating-value">{restoDetail.rating}</span>
                  <span className="css-ubtbcz eulusyj0">/5</span>
                </div>
                <div
                 style={{ display:'flex'}}
                  className="css-1lnlsqc eulusyj0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: 24,
                      height: 24,
                      viewBox: "0 0 24 2",
                      ariaHidden: "true",
                      focusable: "false",
                    }}
                    mr="xs"
                    alt=""
                    className="css-igdmea e125e8xs0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3C6.365 3 3 6.365 3 10.5S6.365 18 10.5 18h3c.131 0 .26.033.372.098L18 20.458v-3.593c0-.224.1-.437.272-.579A7.478 7.478 0 0 0 21 10.5C21 6.365 17.635 3 13.5 3h-3Zm8.25 19.5a.747.747 0 0 1-.372-.098L13.301 19.5H10.5c-4.963 0-9-4.037-9-9s4.037-9 9-9h3c4.963 0 9 4.037 9 9 0 2.575-1.088 5-3 6.709v4.541a.75.75 0 0 1-.75.75Z"
                    ></path>
                  </svg>
                  {restoDetail.reviews ? restoDetail.reviews.length : 0}{" "}
                  commentaires
              <p style={{ marginLeft:10}}> {restoDetail.user_ratings_total} Votes </p>
                </div>
              </div>
            </div>
            </div> 
          </Col>
        </Row>
         
        <Row>
          <Col xs={12} sm={8} md={8} lg={8}>
            <List
              className="conteneur-avis"
              sx={{ width: "100%", bgcolor: "background.paper" }}
            >
              {restoDetail.reviews &&
                restoDetail.reviews.map((info, index) => (
                  <UserComment
                    key={index}
                    name_user={info.author_name}
                    profil_picture={info.profile_photo_url}
                    text_avis={info.text}
                    note_user={info.rating}
                  />
                ))}
            </List>
            
          </Col>
        </Row>
      </Container>
  
    </>
  );
}
