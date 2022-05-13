import React, { useState, useEffect } from "react";
import usePlacesAutocomplete from "@atomap/use-places-autocomplete";
import "./InputSearch.css";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import RoomIcon from '@mui/icons-material/Room';
import InputAdornment from '@mui/material/InputAdornment';
const key = "AIzaSyAURsom7c-jmbNERN0wVqb4OzVten2Hy24";
export default function PredictionsOnInputChange(props) {
  const [selectedPrediction, setSelectedPrediction] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const { predictions, error } = usePlacesAutocomplete(searchValue);
  const [coordonnateLat, setCoordonateLat] = useState(null);
  const [coordonnateLng, setCoordonateLng] = useState(null);

  useEffect(() => {
    const presentLocation = selectedPrediction !== null;

    if (presentLocation) {
      resquestApi();
    }
  }, [selectedPrediction]);

  useEffect(() => {
    const prensentCoordonate =
      coordonnateLat !== null && coordonnateLng !== null;
    if (prensentCoordonate) {
      let data = [coordonnateLat, coordonnateLng];
      localStorage.setItem("coordonate", JSON.stringify(data));
      localStorage.setItem("ville", selectedPrediction)
      props.newLocation([coordonnateLat, coordonnateLng]);
      props.adresseDemande(true);
      
    }
  }, [coordonnateLat, coordonnateLng]);

  if (error) {
    console.error(error);
  }

  const handlePredictionSelection = (e, prediction) => {
    e.preventDefault();
    console.log(prediction.description);
    setSelectedPrediction(prediction.description);
    setSearchValue("");
  };

  const resquestApi = async () => {
    const cors = "https://api.allorigins.win/get?url=";
    const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${selectedPrediction}&key=${key}`;
    const encodedEndpoint = encodeURIComponent(endpoint);
    try {
      const resquest = await fetch(`${cors}${encodedEndpoint}`);
      const json = await resquest.json();
      const { results } = JSON.parse(json.contents);

      setCoordonateLat(results[0].geometry.location.lat);
      setCoordonateLng(results[0].geometry.location.lng);
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };

  return (
    <div className="conteneur-inputSearch">
      <TextField
      required
        id="outlined-basic"
        label="Entrez une adresse"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RoomIcon />
            </InputAdornment>
          ),
        }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        sx={{ width: "100%" }}
        style={{ width: "100%", backgroundColor: "white" }}
         
      />
      <form id="form">
        {/* <input
          id="inputAsress"
          placeholder="Entrez une adresse..."
          name="predictionSearch"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        /> */}
        <ul>
          {searchValue &&
            predictions?.map((prediction) => (
              <li className="listeInput" key={prediction?.place_id}>
                <Button
                  variant="light"
                  className="btnSearch"
                  onClick={(e) => handlePredictionSelection(e, prediction)}
                >
                  {prediction?.description || "Not found"}
                </Button>{" "}
              </li>
            ))}
        </ul>

      </form>
    </div>
  );
}
