import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import "./BoxCard.css";

export default function BoxCard(props) {
  return (
    <Grid item={true} xs={12} sm={4} md={3}>
      <Box style={{ cursor: "pointer", width: 223.43, height: 399.42, margin:'auto' }}>
        <div
          className="imgBox"
          style={{
            width: 223,
            height: 298,
            borderRadius: 12,
            backgroundImage: `url(${props.url})`,
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
              <span> 5,0</span>
              <span style={{ color: "#717171" }}>(15)</span>{" "}
            </p>
            <span style={{color:'#717171', marginLeft:5}}> -</span>
             <p style={{ color: "#717171", marginLeft:5 }}>Paris</p>{" "}
          </div>
          <div style={{ display:'flex', justifyContent:"flex-start", flexDirection:'column', marginTop:-10}}>
          <span className="span-carte-test">{props.texte}</span>
          <h6 className="title-carte-test">{props.title}</h6>
            </div> 


        </div>
      </Box>
    </Grid>
  );
}
