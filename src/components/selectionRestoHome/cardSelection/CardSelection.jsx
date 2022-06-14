import React, {useEffect} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import "./CardSelection.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardSelection(props) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
 


  return (
    <Grid item={true} xs={12} sm={4} md={3}>
      <Box data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-offset="0"  style={{ cursor: "pointer", width: 223.43, height: 399.42, margin:5 }}>
        <div
          className="imgBox"
          style={{
            width: 223,
            height: 298,
            borderRadius: 12,
            backgroundImage: `url(${props.data})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
           
          }}
        ></div>
        <div>
          <div style={{ display: "flex" }}>
            {" "}
            <StarIcon />{" "}
            <p style={{marginLeft:2}}>
              {" "}
              <span> {props.note}</span>
              <span style={{ color: "#717171" }}>(15)</span>{" "}
            </p>
            <span style={{color:'#717171', marginLeft:5}}> -</span>
             <p style={{ color: "#717171", marginLeft:5 }}>{props.ville}</p>{" "}
          </div>
          <div style={{ display:'flex', justifyContent:"flex-start", flexDirection:'column', marginTop:-10}}>
          <span className="span-carte-test">{props.texte}</span>
          <h6 className="title-carte-test">{props.nom}</h6>
            </div> 


        </div>
      </Box>
    </Grid>
  );
}
