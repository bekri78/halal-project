import React, { useEffect, useState } from "react";

import Location from "../Location/location";
import AutoCompleteResto from "../autoCompleteResto/AutoCompleteResto";
import { arrondissementData } from "../../arrondissements";
import Footer from "../footer/Footer";
import FilterSelect from "../filterSelelect/FilterSelect";
import CardMaterialUi from "../cardMui/CardMui";
import MediaControlCard from "../carMui2/CardMui2";
import Filter from "../filter/Filter";
import PredictionsOnInputChange from "../autoComplete/InputSearch";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import SimpleAccordion from "../accordeon/Accordeon";
import DraggableMarker from "../draggleMarker/marker";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CardMaps.css";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import markerIcon2 from "../../ressource/Marker/marker-icon-2x.png";
import markerIcon from "../../ressource/Marker/marker-icon.png";
import markerShadow from "../../ressource/Marker/marker-shadow.png";
import { Autocomplete } from "@mui/material";
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
  let data = localStorage.getItem("coordonate");
  let ville = localStorage.getItem("ville").split(",");

  data = JSON.parse(data);

  useEffect(() => {
    const presentLocation = centerMap !== null;
    // si mes state lat et lng sont different de nul appel ma function resquestApi
    if (presentLocation) {
      console.log(data);
      resquestApi();
    } else {
      setCenterMap(data);
    }
  }, [centerMap]); // si lat et lng on une nouvelle attribution de valeurs relance le useEffect

  

  const resquestApi = async () => {
    const cors = "https://api.allorigins.win/get?url=";
    const endpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant halal&location=${data[0]},${data[1]}&radius=1000&keyword=cruise&key=${key}`;
    const encodedEndpoint = encodeURIComponent(endpoint);
    try {
      const resquest = await fetch(`${cors}${encodedEndpoint}`);
      const json = await resquest.json();
      const { results } = JSON.parse(json.contents);
      console.log(results);
      setRestaurant(results);
      setRestaurantCopie(results);
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };

  const rating = (newValue) => {
    console.log(newValue);
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
      console.log('je suis dans le if')
      restaurantCopie
        .filter((el) => el.opening_hours.open_now === true)
        .map((filterRating) => {
          return arrayOpen.push(filterRating);
        });
        console.log(arrayOpen)
      setRestaurantCopie(arrayOpen);    
    } 
    
    else {
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
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              margin: "auto",
            }}
          >
            <div style={{ width: "40%" }}>
              <PredictionsOnInputChange
                newLocation={(newLocation) => setCenterMap(newLocation)}
                adresseDemande={(adresseDemande) => console.log(adresseDemande)}
              />
            </div>
            <div style={{ marginLeft: "-10px" }}>
              <AutoCompleteResto />
            </div>

            <Button
              style={{ marginLeft: 10, padding: 15 }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              TROUVER
            </Button>
          </Col>
        </Row>
        {/* <h1 className='titlemap'>Map</h1> */}

        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className="title-ville">
              <h1 className="ville"> Les meilleurs restaurants à {ville[1]}</h1>
            </div>
          </Col>
        </Row>
        <Row className="position-nav">
          <Col sm={12} md={12} lg={12}>
            <div>
              <FilterSelect
                noteFiltre={(newNote) => rating(newNote)}
                restoOuvertFilter={(ouvert) =>( setRestaurantOpen(ouvert), open(ouvert) ) }
                restoPopulaire={(populaire) =>(

                  setRestaurantPopulaire(populaire),
                  populairee(populaire)
                )
                }
              />
            </div>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col xs={12} sm={7} md={7} lg={7} className="carte">
              {restaurantCopie &&
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
                ))}
            </Col>
            <Col xs={12} sm={5} md={5} lg={5}>
              {/* <Arrondissements
            valueArrondissement={(newValue) => {
              rating(newValue);
            }}
          /> */}
              {centerMap && (
                <MapContainer
                  center={centerMap}
                  zoom={12}
                  style={{ width: "100%", height: "100vh" }}
                  className="mapContainer"
                >
                  <TileLayer
                    url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=z6XfQf2YId8cjbY3LhER"
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
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

                  {arrondissementData.features.map((state, index) => {
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
                  })}
                </MapContainer>
              )}
              <Location
                centerlocation={(center) => {
                  setCenterMap(center);
                }}
              />
            </Col>
          </Row>
        </Container>
        <div style={{ marginTop: "2%" }}>
          <Divider variant="middle" />
        </div>
        <Row className="justify-content-center">
          <Col className="conteneur-question" xs={12} sm={12} md={12} lg={12}>
            <div className="questionFrequente">
              <p className="titleQuestion">Questions Fréquentes</p>
              <SimpleAccordion />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer ville={ville[1]} />
    </>
  );
}
