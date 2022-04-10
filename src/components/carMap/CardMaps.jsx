import React, { useEffect, useState } from "react";
import Location from "../Location/location";
import { arrondissementData } from "../../arrondissements";
import CardMaterialUi from '../cardMui/CardMui'
import Filter from '../filter/Filter'
import PredictionsOnInputChange  from '../autoComplete/InputSearch';
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import  DraggableMarker from '../draggleMarker/marker'
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CardMaps.css";
import markerIcon2 from "../../ressource/Marker/marker-icon-2x.png";
import markerIcon from "../../ressource/Marker/marker-icon.png";
import markerShadow from "../../ressource/Marker/marker-shadow.png";
const key = 'AIzaSyAURsom7c-jmbNERN0wVqb4OzVten2Hy24'; // clef google map api

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});



export default function CardMaps(props) {
  const [location, setLocation] = useState([]);
  const [dataRating, setDataRating] = useState([]);
  const [centerMap, setCenterMap] = useState();
  const [restaurant,setRestaurant]=useState([])
  // useEffect(() => {
  //   lieuDeTournage.features.map((data) => {
  //     return (
  //       setLocation((location) => [...location, data.properties]),
  //       setDataRating((location) => [...location, data.properties])
  //     );
  //   });
  // }, []);


  useEffect(() => {
    const presentLocation = centerMap  !== null   ;
    // si mes state lat et lng sont different de nul appel ma function resquestApi
    if (presentLocation) {
      console.log(centerMap)
      resquestApi();
    }
  }, [centerMap]); // si lat et lng on une nouvelle attribution de valeurs relance le useEffect

  // useEffect(() => {
  //   const presentRadius = radius !== null;
  //   if (presentRadius) {
  //     resquestApi();
  //   }
  // }, [radius]);
  const resquestApi = async () => {
    const cors = 'https://api.allorigins.win/get?url=';
    const endpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant halal&location=${centerMap[0]},${centerMap[1]}&radius=1000&keyword=cruise&key=${key}`;
    const encodedEndpoint = encodeURIComponent(endpoint);
    try {

      const resquest = await fetch(`${cors}${encodedEndpoint}`);
      const json = await resquest.json();
      const { results } = JSON.parse(json.contents);
      console.log(results)
       setRestaurant(results);
  
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };

  useEffect(() => {}, [centerMap]);

  const rating =  (newValue) => {
    props.postaleCode(newValue);
    let arrayRating = [];
    location
      .filter(
        (el) =>
          el.ardt_lieu >= newValue[0] && el.ardt_lieu <= newValue.slice(-1)[0]
      )
      .map((filterRating) => {
       
        return arrayRating.push(filterRating), setDataRating(arrayRating);
      });

  };
 
  return (
    <Container className="jumbotron" id="map">
      <h1 className='titlemap'>Map</h1>
      <Row>
      <PredictionsOnInputChange newLocation={(newLocation)=> setCenterMap(newLocation)}  />
      </Row>
      <Row>
        <Col sm={12}>
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
              className='mapContainer'
            >
              <TileLayer
                url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=z6XfQf2YId8cjbY3LhER"
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
              />

            
                {restaurant &&
                  restaurant.map((data, index) => {
                   
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
            <DraggableMarker center={centerMap}/>

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


<Row><Filter/></Row>

      <Row className="align-items-center justify-content-center">
          {restaurant &&
            restaurant.map((data) => (
                  //console.log(data.opening_hours.open_now),
              <CardMaterialUi
                key={data.place_id}
                placeId={data.place_id}
                name={data.name}
                adress={data.formatted_address}
                initiale={data.name}
                starsRating={data.rating}
                cardLat={data.geometry.location.lat}
                cardLng={data.geometry.location.lng}
                 open={data.opening_hours ? data.opening_hours.open_now : false}
                apiKey={key}
                photoreference={ data.photos ? data.photos[0]['photo_reference'] : "Aap_uEAJuqX8B3OPawAhaUsgJOeUylm3CLUdg8jTVxf88KbDEz4Q1I8WeLB3qzsrpIqwC2fO-Hp2V-IvukTy0IsJtgdklYeefx9QzObM39ykT7eUmNWzelWKI6fiaw8dEgrtPNoUGCfiW4vmkiFIN2MnZoP6dwuhtSKJD9Mnpq0oswHGqgZM"}
              />
            ))}
        </Row>
    </Container>
  )
}

