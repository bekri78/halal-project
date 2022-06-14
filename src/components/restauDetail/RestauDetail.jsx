import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AutoCompleteResto from "../autoCompleteResto/AutoCompleteResto";
import PredictionsOnInputChange from "../autoComplete/InputSearch";
import SteperPrice from "../steperPrice/SteperPrice";
import Divider from "@mui/material/Divider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RoomIcon from "@mui/icons-material/Room";
import Button from "@mui/material/Button";
import UserComment from "../userComment/UserComment";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EuroIcon from "@mui/icons-material/Euro";
import StarsIcon from "@mui/icons-material/Stars";
import HalalLogo from "../../ressource/img/halal-food-logo.png";
import Cadeau from "../../ressource/img/cadeau.svg";
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';

import imgBoss from '../../ressource/img/img-boss-test.jpg'
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
              <h1 className="titleResto"> **{restoDetail.name} </h1>
            </div>
            <div  style={{paddingLeft:'80px', paddingRight:'80px'}} >
              <span style={{ display:'flex', justifyContent:'start', alignItems:'center'}}>
                {" "}
                <span className="commentairesNumber" ><StarIcon fontSize="small"/>{restoDetail.rating}</span> - {" "}
                {restoDetail.reviews ? (
                  <p className="commentairesNumber commentaireDecoration">{restoDetail.reviews.length} commentaires</p>
                ) : (
                  <p className="commentairesNumber commentaireDecoration">Aucun commentaires</p>
                )}{" "}  -
                <p className="commentairesNumber commentaireDecoration">{ restoDetail.formatted_address}</p>  
              </span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>

            { restoDetail.photos && ( 
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
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
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

<Row style={{ marginTop:'2%'}}>


  <Col xs={12} sm={8} md={8} lg={8}>
  <div style={{ display:'flex', justifyContent:'flex-start', alignItems:'center', paddingLeft:80, paddingBottom:20}}>

  <div className="container-specialite">
     <h2 className="primary-texte-specialite">Restaurant sur place : Specialite Food ⸱ Chez Diane</h2>
      <p className="secondary-texte-specialite">4 voyageurs - chambre - lits - salle de bain</p></div>
  <div> <Avatar sx={{ width: 56, height: 56 }} src={imgBoss}></Avatar></div>

  </div>
  <div  style={{ paddingLeft:80}}>

  <Divider  />
  </div>
  </Col>
</Row>




        <Row className="justify-content-center jumbotron">
          <Col xs={12} sm={7} md={7} lg={7}>
            <div style={{ display: "flex" }}>
              <Typography
                component="div"
                variant="h6"
                className="position-Start-text conteneur-carte"
              >
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<CreditCardIcon />}
                  aria-owns={open ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                  style={{ marginRight: 5 }}
                >
                  PAY
                </Button>
                <Popover
                  id="mouse-over-popover"
                  sx={{
                    pointerEvents: "none",
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <Typography
                    sx={{ p: 2 }}
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                  >
                    Payement par carte disponible
                  </Typography>
                </Popover>
              </Typography>

              <Typography
                component="div"
                variant="h6"
                className="position-Start-text conteneur-carte"
              >
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<StarsIcon />}
                  aria-owns={open2 ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen2}
                  onMouseLeave={handlePopoverClose2}
                >
                  TOP
                </Button>
                <Popover
                  id="mouse-over-popover"
                  sx={{
                    pointerEvents: "none",
                  }}
                  open={open2}
                  anchorEl={anchorE2}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  onClose={handlePopoverClose2}
                  disableRestoreFocus
                >
                  <Typography
                    sx={{ p: 2 }}
                    aria-owns={open2 ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen2}
                    onMouseLeave={handlePopoverClose2}
                  >
                    Restautant populaire
                  </Typography>
                </Popover>
              </Typography>

              <Typography
                style={{
                  marginLeft: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {restoDetail.types
                  ? restoDetail.types[0].charAt(0).toUpperCase() +
                    restoDetail.types[0].slice(1)
                  : "Non renseignier"}
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: 10,
                marginTop: "5%",
              }}
            >
              <h1 className="titleRestoDetail"> {restoDetail.name}</h1>

              <div
                data-test="restaurant-page-rating-value"
                className="css-qupkco e1xxesyf0"
              >
                <span className="rating-value">{restoDetail.rating}</span>
                <span className="css-ubtbcz eulusyj0">/5</span>
                <div
                  data-test="restaurant-page-reviews-count"
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
                  {restoDetail.reviews ? restoDetail.reviews.length : 0}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <p className="css-1lnlsqc">
                {" "}
                <RoomIcon /> {restoDetail.formatted_address}{" "}
                <span className="ouvertAujour">
                  {restoDetail.open_now ? "Ouvert aujourd'hui" : "FERME"}
                </span>{" "}
              </p>
              <p>
                {" "}
                <LocalPhoneIcon /> {restoDetail.formatted_phone_number}
              </p>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    marginTop: 0,
                  }}
                >
                  {" "}
                  <span>
                    {" "}
                    <EuroIcon />{" "}
                  </span>{" "}
                  <p style={{ margin: "auto" }}> Budget </p>{" "}
                </div>
                <SteperPrice priceSteper={restoDetail.price_level} />
              </div>
              <div className="conteneur-resto-marketing">
                <p className="restaurant-page-marketing-offer">
                  - 50% sur la carte - Halal Food{" "}
                </p>
              </div>
            </div>
         

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
                    Augmentation des féquences de nettoyage, ( tables, toilettes
                    etc ...)
                  </Typography>
                  <Typography>
                    * Cette information est déclarée par le restaurant
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Divider />
            <h2 className="avisTitle">
              <span>Avis</span>
            </h2>
            <div>
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <CircularProgress
                  variant="determinate"
                  value={(restoDetail.rating * 100) / 5}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {restoDetail.rating} / 5
                  </Typography>
                </Box>
              </Box>
            </div>
            <div>
              {" "}
              <p> {restoDetail.user_ratings_total} Votes </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <p className="titlecomment">
              <span>Ce que les clients disent de ce restaurant&nbsp;:</span>
            </p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className="conteneur-avis">
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
          </Col>
        </Row>
      </Container>

    </>
  );
}
