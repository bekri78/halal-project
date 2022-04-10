import React, {useRef,useEffect} from "react";
import bgImage from "../../ressource/video/food.mp4";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Transition from "../transition/Transition";
import gsap from 'gsap'
import "./Home.css";

export default function Home() {
    const home = gsap.timeline();
    const homeh1= useRef(null)
    const homeimg=useRef(null)
    useEffect(()=>{
        home.from(homeh1.current,{
            duration: .6,
            skewX:10,
            x:-100,
            opacity:0
        },"-=3.5")
        home.from(homeimg.current,{
            duration: .5,
            y: -200,
            opacity:0
        },"-=3")

    })
  return (
      <>
      <Transition timeline={home}/>
    <div className="home" ref={homeimg}>
      <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4" />
      </video>
      <div className="text-box">
        <p>  FOOD 93</p>
        <h1 ref={homeh1}>HALAL</h1>
        <h3> Les meilleurs restaurant halal<br></br> Autour de vous </h3>
        <div className="conteneur-text"> 
          <div style={{display:"flex"}}>
          <a href="">
            Decouvrir   <span>&#8594;</span>
          </a>
          <a href=""> Nous contacter</a>

          </div>
            <div>
          <span>
         Tous les restaurants presenter sont agreer Halal <br></br> et verifier par notre equipe
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
