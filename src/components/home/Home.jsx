import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectionHome from "../selectionRestoHome/Selection";
import ModaleConnexion from "../connectModal/ModaleConnexion"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Transition from "../transition/Transition";
import gsap from "gsap";
import PredictionsOnInputChange from "../autoComplete/InputSearch";
import "./Home.css";
import SelectResto from "../selectResto/SelectResto";
import lottie from "lottie-web";
import SelectionEte from "../selectionRestoHome/selectionEte/SelectionEte";
import AOS from "aos";
import paterne from "../../ressource/img/patterne-img.svg";
import "aos/dist/aos.css";
import Ville from "../ville/Ville";
import Avis from "../avis/Avis";

export default function Home() {
  const container = useRef(null);
  const home = gsap.timeline();
  const homeimg = useRef(null);
  const [adresseDemande, setAdresseDemande] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../ressource/lottie/72651-food-text-animation.json"),
    });
  }, []);

  useEffect(() => {
    if (adresseDemande === true) {
     
      navigate("/Carte");
    }
  }, [adresseDemande]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Transition timeline={home} />
      <div className="home-avatar" ref={homeimg}>
        <div
          style={{
            height: "60%",
            width: "40%",
            top: -10,
            position: "absolute",
            marginLeft: "2%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {" "}
       
          <span style={{ height: "40%", width: "40%" }} ref={container}></span>
        </div>
        <div className="text-box" data-aos="fade-up" data-aos-duration="1000">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "auto",
            }}
          >
            <div className="inputSearchHome">
              <PredictionsOnInputChange
                className="prediction"
                newLocation={(newLocation) => console.log(newLocation)}
                adresseDemande={(adresseDemande) => setAdresseDemande(true)}
              />
              <SelectResto />
              <Button
                variant="contained"
                style={{
                  marginLeft: 10,
                  width: "28%",
                  paddingRight: 20,
                  backgroundColor: "rgb(52, 71, 103)",
                }}
                startIcon={<SearchIcon />}
              >
                Trouver
              </Button>
            </div>
          </div>

          <div className="conteneur-text">
            <div style={{ display: "flex" }}>
              <a className="text2" href="">
                Decouvrir <span>&#8594;</span>
              </a>
              <a className="text2" href="">
                {" "}
                Nous contacter
              </a>
            </div>
            <div>
              <span className="text2">
                * Tous les restaurants presentés sont agrées Halal <br></br> et
                verifiés par notre équipe.
              </span>
            </div>
          </div>
        </div>

        <div className="social-icons">
          <FacebookIcon style={{ color: "white" }} />
          <InstagramIcon style={{ color: "white" }} />
        </div>
      </div>

      <SelectionHome />

      <div>
        <SelectionEte />
      </div>
      <div className="container-banniere">
        <img src={paterne} className="banniere-img" alt="banniere" />

        <div className="container-info-home">
          <div className="container-el-home">
            <h2
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              Account Pages for beautiful webapps
            </h2>
            <p
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              We created many examples for pages like Signup, Signin, Forgot
              Password, 2FA Authentification and so on. Just choose between a
              Basic Design, an illustration or a cover and you are good to go!
            </p>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "auto",
                width: "100%",
              }}
            >
              <Button variant="contained">View Pages</Button>

              <Button variant="text">View signup Pages</Button>
            </div>
          </div>
        </div>
      </div>
      <Ville/>
      <Avis/>
      <ModaleConnexion/>
    </>
  );
}
