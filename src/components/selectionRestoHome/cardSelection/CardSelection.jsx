import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import "./CardSelection.css";

export default function CardSelection(props) {
  return (
    <Card className="cardSelection" sx={{ maxWidth: 300, margin: 0.5, cursor: "pointer", boxShadow: 4,  }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          className="noteNameSelection"
          gutterBottom
          variant="h5"
          component="div"
        >
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'40%'}}> {props.bar ? <LocalBarIcon/> : <StorefrontIcon/> }  <p className="nomSelection">{props.nom}</p></div>   
        <div style={{display:'flex', justifyContent:'flex-end'}}><p className="noteSelection">{props.note}/5</p></div>  
        </Typography>
        <Typography variant="body2" color="text.secondary"> {props.adress}</Typography>

        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className="cardFooterBtn">
        <Button size="small">Decouvrir</Button>
      </CardActions>
    </Card>
  );
}
