import React,{ useState, useRef,useCallback,useMemo, useEffect } from "react";
import L from "leaflet";


import {  Marker, Popup } from "react-leaflet";


export default function DraggableMarker(props) {

  useEffect(()=>{
    let centerPositon = props.center
    if(centerPositon !== null){
      setPosition(centerPositon)
    }

  },[props.center])
  console.log('centeruser',props.center)
   
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(props.center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])


    const  redIcon = new L.Icon({
        iconUrl: require('../../ressource/Marker/marker-icon-2x-red.png'),
        shadowUrl:require(  '../../ressource/Marker/marker-shadow.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

  
    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
         icon={redIcon}
        >
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'Le Marker est mobile !'
              : 'Cicker ici pour bouger le Marker'}
          </span>
        </Popup>
      </Marker>
    )
  }