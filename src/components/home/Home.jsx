import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectionHome from "../selectionRestoHome/Selection";
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
import "aos/dist/aos.css";

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
      console.log("redirection page map");
      navigate("/map");
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
          {/* <h1 className="titleHome">Halal </h1>{" "} */}
          <span
            style={{ height: "40%", width:'40%'}}
            ref={container}
          ></span>
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
                style={{ marginLeft: 10, width: "28%", paddingRight: 20, backgroundColor:"rgb(52, 71, 103)" }}
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
      <div className="custom-shape-divider-bottom-1653573471">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div>
        <SelectionEte />
      </div>
    </>
  );
}
