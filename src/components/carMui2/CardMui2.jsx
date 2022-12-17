import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./CardMui2.css";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

export default function MediaControlCard(props) {
  const url = `/${props.placeId}`;
  const navigate = useNavigate();
  const [distanceResto, setDistanceResto] = useState(0);
  let coordinateUser = JSON.parse(localStorage.getItem("coordonate"));
  const latUser = coordinateUser[0];
  const lngUser = coordinateUser[1];
  const latResto = props.cardLat;
  const lngResto = props.cardLng;

  const distance = (latUser, lngUser, latResto, lngResto, unit) => {
    var radlat1 = (Math.PI * latUser) / 180;
    var radlat2 = (Math.PI * latResto) / 180;
    var theta = lngUser - lngResto;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === "K") {
      dist = dist * 1.609344;
    }
    if (unit === "M") {
      dist = dist * 0.8684;
    }
    return setDistanceResto(dist);
  };

  useEffect(() => {
    if ((coordinateUser && latResto && lngResto) !== null) {
      distance(latUser, lngUser, latResto, lngResto, "K");
    } else {
      console.log("rien");
    }
  }, [coordinateUser]);
  const redirection = () => {
    navigate(url);
  };

  const images = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=350&photoreference=${props.photoreference}&sensor=false&key=${props.apiKey}`

  return (
    <>
         <div className="cardBox1">
       <Card className="card2" onClick={redirection}>
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <span style={{ marginRight: 30, marginTop: 10, color: "white" }}>
              {" "}
              <FavoriteTwoToneIcon sx={{ fontSize: 26 }} />
            </span>
          </div>
          <CardMedia
            component="div"
            style={{
              width: 313,
              height: 380.5,
              borderRadius: " 10px 10px 10px 10px",
              cursor: "pointer",
              backgroundImage: `url(https://maps.googleapis.com/maps/api/place/photo?maxwidth=350&photoreference=${props.photoreference}&sensor=false&key=${props.apiKey}`,
              borderStyle: "none",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              margin: "auto",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              flexBasis: "100%",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h2"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <p className="titleCarteName">
                  {props.name ? props.name : "?"}
                </p>
                <p className="ratingCarte">
                  {" "}
                  {props.starsRating}{" "}
                  <span>
                    <StarIcon sx={{ fontSize: 15 }} />
                  </span>
                </p>
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                className="position-Start-text  "
              >
                <p className="adresseCarte"> {props.adress}</p>
              </Typography>
              <Typography
                variant="subtitle2"
                component="div"
                className="position-Start-text"
              >
                <p
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontSize: 15,
                    marginBottom: "revert",
                    marginTop: -10,
                  }}
                >
                  {" "}
                  <span>
                    {" "}
                    <DirectionsWalkIcon />
                  </span>{" "}
                  {distanceResto.toFixed(1)} km
                </p>
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </div> 






     


    </>
  );
}
