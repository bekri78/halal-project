import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import "./CardSelection.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardSelection(props) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Card  data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-offset="0" className="cardSelection" sx={{ maxWidth: 250, margin: 1, cursor: "pointer", boxShadow: 4,  }}>
      <CardMedia
        component="img"
        height="100"
        image={props.data}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          className="noteNameSelection"
          gutterBottom
          variant="h5"
          component="div"
        >
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'40%'}}> {props.bar ? <LocalBarIcon/> : <FoodBankOutlinedIcon/> }  <p className="nomSelection">{props.nom}</p></div>   
        <div style={{display:'flex', justifyContent:'flex-end'}}><p className="noteSelection">{props.note}/5</p></div>  
        </Typography>
        <Typography variant="body2" color="text.secondary"> {props.ville}</Typography>

        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          
        </Typography>
      </CardContent>
      <CardActions className="cardFooterBtn">
        <Button size="small">Decouvrir</Button>
      </CardActions>
    </Card>
  );
}
