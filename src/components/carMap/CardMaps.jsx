import React, { useEffect, useState } from "react";

import Location from "../Location/location";
// import { arrondissementData } from "../../arrondissements";
import Footer from "../footer/Footer";
import FilterSelect from "../filterSelelect/FilterSelect";
import SimpleAccordion from "../accordeon/Accordeon";
import MediaControlCard from "../carMui2/CardMui2";
import DraggableMarker from "../draggleMarker/marker";
import markerIcon2 from "../../ressource/Marker/marker-icon-2x.png";
import markerIcon from "../../ressource/Marker/marker-icon.png";
import markerShadow from "../../ressource/Marker/marker-shadow.png";
import Logo from "../../ressource/img/halal-food-logo.png";
import Apropos from "../aPropos/Apropos";
import LoaderFood from "./loaderFood/LoaderFood";
import "./CardMaps.css";
import * as L from "leaflet";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Divider from "@mui/material/Divider";
import MapIcon from "@mui/icons-material/Map";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
const key = "AIzaSyAURsom7c-jmbNERN0wVqb4OzVten2Hy24"; // clef google map api

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function CardMaps(props) {
  var _ = require("lodash");
  const [location, setLocation] = useState([]);
  const [dataRating, setDataRating] = useState([]);
  const [centerMap, setCenterMap] = useState();
  const [restaurant, setRestaurant] = useState([]);
  const [restaurantCopie, setRestaurantCopie] = useState([]);
  const [restaurantOpen, setRestaurantOpen] = useState(false);
  const [restaurantPopulaire, setRestaurantPopulaire] = useState(false);
  const [affichageCarte, setAffichageCarte] = useState(false);
  let data = localStorage.getItem("coordonate");
  let ville = localStorage.getItem("ville").split(",");

  data = JSON.parse(data);

  useEffect(() => {
    const presentLocation = centerMap !== null;
    // si mes state lat et lng sont different de nul appel ma function resquestApi
    if (presentLocation) {
      resquestApi();
    } else {
      setCenterMap(data);
    }
  }, [centerMap]); // si lat et lng on une nouvelle attribution de valeurs relance le useEffect

  // useEffect(()=>{

  //   setTimeout(() => {
  //       var map = L.map('my-map'); // my-map is the ID of your DOM map container
  //       map.invalidateSize();
  //     }, 0);

  // },[affichageCarte])

  const resquestApi = async () => {
    const cors = "https://api.allorigins.win/get?url=";
    const endpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant halal&location=${data[0]},${data[1]}&radius=1000&keyword=cruise&key=${key}`;
    const encodedEndpoint = encodeURIComponent(endpoint);
    try {
      const resquest = await fetch(`${cors}${encodedEndpoint}`);
      const json = await resquest.json();
      const { results } = JSON.parse(json.contents);
      
      setRestaurant(results);
      setRestaurantCopie(results);
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };

  const rating = (newValue) => {
   
    // props.postaleCode(newValue);
    let arrayRating = [];
    restaurant
      .filter((el) => Math.floor(el.rating) >= newValue)
      .map((filterRating) => {
        return arrayRating.push(filterRating), setRestaurantCopie(arrayRating);
      });
  };

  const open = (ouvert) => {
    let arrayOpen = [];
    if (ouvert === true) {
      restaurantCopie
        .filter((el) => el.opening_hours.open_now === true)
        .map((filterRating) => {
          return arrayOpen.push(filterRating);
        });
     
      setRestaurantCopie(arrayOpen);
    } else {
      setRestaurantCopie(restaurant);
    }
  };

  const populairee = (pop) => {
    if (pop) {
      let arrayPopulaire = [...restaurantCopie];
      arrayPopulaire = arrayPopulaire.sort((a, b) => {
        return b.rating - a.rating;
      });
      setRestaurantCopie(arrayPopulaire);
    } else {
      setRestaurantCopie(restaurant);
    }
  };

  return (
    <>
      <Container fluid id="map">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className="title-ville">
              <img style={{ width: "8%" }} src={Logo} alt="logo" />{" "}
              <h1 className="ville"> Les meilleurs restaurants à {ville[1]}</h1>
            </div>
          </Col>
        </Row>
        <Row className="position-nav">
          <Col sm={12} md={12} lg={12}>
            <div style={{ paddingTop: "0.5%", paddingBottom: "0.5%" }}>
              <Divider
                variant="middle"
                style={{ width: "50%", margin: "auto" }}
              />
            </div>
            <div>
              <FilterSelect
                restoOuvertFilter={(ouvert) => (
                  setRestaurantOpen(ouvert), open(ouvert)
                )}
                restoPopulaire={(populaire) => (
                  setRestaurantPopulaire(populaire), populairee(populaire)
                )}
              />
            </div>
            <div style={{ paddingBottom: "0.5%" }}>
              <Divider
                variant="middle"
                style={{ width: "50%", margin: "auto" }}
              />
            </div>
          </Col>
        </Row>
        <Container fluid>
          <Row style={{ display: affichageCarte ? "none" : "block" }}>
            <Col xs={12} sm={12} md={12} lg={12} className="carte">
              <div className="container-carte-resto">
               
                {restaurantCopie.length > 0 ?(
                  restaurantCopie.map((data) => (
                    <MediaControlCard
                      key={data.place_id}
                      placeId={data.place_id}
                      name={data.name}
                      adress={data.formatted_address}
                      type={data.types[1]}
                      initiale={data.name}
                      starsRating={data.rating}
                      cardLat={data.geometry.location.lat}
                      cardLng={data.geometry.location.lng}
                      open={
                        data.opening_hours ? data.opening_hours.open_now : false
                      }
                      apiKey={key}
                      photoreference={
                        data.photos
                          ? data.photos[0]["photo_reference"]
                          : "Aap_uEAJuqX8B3OPawAhaUsgJOeUylm3CLUdg8jTVxf88KbDEz4Q1I8WeLB3qzsrpIqwC2fO-Hp2V-IvukTy0IsJtgdklYeefx9QzObM39ykT7eUmNWzelWKI6fiaw8dEgrtPNoUGCfiW4vmkiFIN2MnZoP6dwuhtSKJD9Mnpq0oswHGqgZM"
                      }
                    />
                  ))):<LoaderFood/>}
              </div>
            </Col>
          </Row>
          <Row style={{  visibility : affichageCarte ? "visible" : "hidden" , height: affichageCarte ? "auto" : "0px" }}>
            <Col xs={12} sm={12} md={12} lg={12}>
              {centerMap && (
                <MapContainer
                  center={centerMap}
                  zoom={12}
                  style={{ width: "100wh", height: "100vh" }}
                  className="mapContainer"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {restaurantCopie &&
                    restaurantCopie.map((data, index) => {
                      return (
                        <Marker key={index} position={data.geometry.location}>
                          <Popup>
                            {data.name}
                            <br></br>
                            {data.formatted_address}
                          </Popup>
                        </Marker>
                      );
                    })}
                  <DraggableMarker center={data ? data : centerMap} />

                  {/* {arrondissementData.features.map((state, index) => {
                    const coordinates = state.geometry.coordinates[0].map(
                      (item) => [item[1], item[0]]
                    );
                    return (
                      <Polygon
                        key={index}
                        pathOptions={{
                          fillColor: "#FD8D3C",
                          fillOpacity: 0.7,
                          weight: 2,
                          opacity: 1,
                          dashArray: 3,
                          color: "white",
                        }}
                        positions={coordinates}
                        eventHandlers={{
                          mouseover: (e) => {
                            const layer = e.target;
                            layer.setStyle({
                              fillOpacity: 0.6,
                              weight: 5,
                              dashArray: "",
                              color: "#666",
                              fillColor: "#D45962",
                            });
                          },
                          mouseout: (e) => {
                            const layer = e.target;
                            layer.setStyle({
                              fillOpacity: 0.6,
                              weight: 2,
                              dashArray: "3",
                              color: "white",
                              fillColor: "#FD803C",
                            });
                          },
                        }}
                      />
                    );
                  })} */}
                </MapContainer>
              )}
              <Location
                centerlocation={(center) => {
                  setCenterMap(center);
                }}
              />
            </Col>
          </Row>
         {
           restaurantCopie.length > 0 && (

             
             <div className="displayCard">
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              aria-label="add"
              onClick={() => {
                setAffichageCarte(!affichageCarte);
              }}
              >
              {affichageCarte ?  <><RestaurantIcon sx={{ mr: 1 }}/>  Restaurants</> : <><MapIcon sx={{ mr: 1 }} />  Carte</>}
            
            </Fab>
          </div>
              )
          }


        </Container>

        <div style={{ marginTop: "2%" }}>
          <Divider variant="middle" />
        </div>
        <Row className="justify-content-center">
          <Col className="conteneur-question" xs={10} sm={10} md={10} lg={10}>
            <div className="questionFrequente">
              <p className="titleQuestion">Questions Fréquentes</p>
              <SimpleAccordion />
            </div>
          </Col>
        </Row>
      </Container>
      <Apropos />
      <Footer ville={ville[1]} />
    </>
  );
}
