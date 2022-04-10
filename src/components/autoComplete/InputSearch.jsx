import React, { useState, useEffect } from 'react';
import usePlacesAutocomplete from '@atomap/use-places-autocomplete';
import './InputSearch.css';
import Button from 'react-bootstrap/Button';
const key = 'AIzaSyAURsom7c-jmbNERN0wVqb4OzVten2Hy24';
export default function PredictionsOnInputChange(props) {
  const [selectedPrediction, setSelectedPrediction] = useState(null);
  const [searchValue, setSearchValue] = useState('');
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
    const prensentCoordonate = coordonnateLat !== null && coordonnateLng !== null;
    if (prensentCoordonate) {
        props.newLocation([coordonnateLat,coordonnateLng])
      
    }
  }, [coordonnateLat, coordonnateLng]);

  if (error) {
    console.error(error);
  }

  const handlePredictionSelection = (e, prediction) => {
    e.preventDefault();
    console.log(prediction.description);
    setSelectedPrediction(prediction.description);
    setSearchValue('');
  };

  const resquestApi = async () => {
    console.log(selectedPrediction);
    const cors = 'https://api.allorigins.win/get?url=';
    const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${selectedPrediction}&key=${key}`;
    const encodedEndpoint = encodeURIComponent(endpoint);
    try {
      const resquest = await fetch(`${cors}${encodedEndpoint}`);
      const json = await resquest.json();
      const { results } = JSON.parse(json.contents);
      console.log(results);
      setCoordonateLat(results[0].geometry.location.lat);
      setCoordonateLng(results[0].geometry.location.lng);
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };

  return (
    <>
      <form id="form">
        <input
          id="inputAsress"
          placeholder="Entrez une adresse..."
          name="predictionSearch"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <ul>
          {searchValue &&
            predictions?.map((prediction) => (
              <li key={prediction?.place_id}>
                <Button variant="light" className="btnSearch" onClick={(e) => handlePredictionSelection(e, prediction)}>
                  {prediction?.description || 'Not found'}
                </Button>{' '}
              </li>
            ))}
        </ul>

        <p className="adresse">Votre Selection: {selectedPrediction || 'Aucune'}</p>
      </form>
    </>
  );
}