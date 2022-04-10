import React, { useEffect, useRef} from "react";
import bgImage from "../../ressource/video/food.mp4";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Transition from "../transition/Transition";
import gsap from "gsap";
import "./Home.css";
import lottie from "lottie-web";

export default function Home() {

  const container = useRef(null)
  const home = gsap.timeline();
  const homeimg = useRef(null);
  

  useEffect(()=>{
lottie.loadAnimation({
  container:container.current,
  renderer:'svg',
  loop: true,
  autoplay:true,
  animationData:require('../../ressource/lottie/72651-food-text-animation.json')

})
  },[])
  return (
    <>
      <Transition timeline={home} />
      <div className="home" ref={homeimg}>
        <video autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
        </video>
        <div className="text-box">
          <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', width:'60%', height:200}}>

          <h1>HALAL</h1>
          <div  className="animation"ref={container}></div>
          </div>
          <h3 className="textHOME">
            {" "}
            Les meilleurs restaurant halal<br></br> Autour de vous{" "}
          </h3>
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
