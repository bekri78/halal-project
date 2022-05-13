import React, { useEffect, useRef, useState} from "react";
import { useNavigate } from 'react-router-dom';
import bgImage from "../../ressource/video/food.mp4";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Transition from "../transition/Transition";
import gsap from "gsap";
import PredictionsOnInputChange  from '../autoComplete/InputSearch';
import "./Home.css";
import SelectResto from '../selectResto/SelectResto'
import lottie from "lottie-web";
 

export default function Home() {

  const container = useRef(null)
  const home = gsap.timeline();
  const homeimg = useRef(null);
  const [adresseDemande,setAdresseDemande] = useState(false)
  const navigate = useNavigate();
  
  useEffect(()=>{
lottie.loadAnimation({
  container:container.current,
  renderer:'svg',
  loop: true,
  autoplay:true,
  animationData:require('../../ressource/lottie/72651-food-text-animation.json')
  
})
  },[])


useEffect(()=>{
  if(adresseDemande === true){
    console.log('redirection page map')
    navigate("/map");
  }

 },[adresseDemande])

  return (
    <>
      <Transition timeline={home} />
      <div className="home" ref={homeimg}>
        <video autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
        </video>
     

        <div className="text-box">
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'auto'}}>
            <div className='inputSearchHome'>
     
          <PredictionsOnInputChange  className='prediction' newLocation={(newLocation)=> console.log(newLocation)} adresseDemande={(adresseDemande)=> setAdresseDemande(true)}/>
          <SelectResto  />
          <Button variant="contained" style={{marginLeft:10, width:'25%'}} startIcon={<SearchIcon />}>
        Trouver
      </Button>
            </div>
          </div>
       
          {/* <h1>HALAL</h1> */}
          {/* <div className="animation"ref={container}></div> */}
           
          <div className="conteneur-text">
            <div style={{ display: "flex" }}>
              <a href="">
                Decouvrir <span>&#8594;</span>
              </a>
              <a href=""> Nous contacter</a>
            </div>
            <div>
              <span className="text2">
                Tous les restaurants presenter sont agreer Halal <br></br> et
                verifier par notre equipe
              </span>
            </div>
          </div>
        </div>
        <div className="social-icons">
          <FacebookIcon style={{ color: "white" }} />
          <InstagramIcon style={{ color: "white" }} />
        </div>
      </div>
    </>
  );
}
