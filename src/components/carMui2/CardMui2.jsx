import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./CardMui2.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Divider from "@mui/material/Divider";
import DoDisturbOffIcon from "@mui/icons-material/DoDisturbOff";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import Popover from "@mui/material/Popover";

export default function MediaControlCard(props) {
  const url = `/${props.placeId}`
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const redirection = ()=>{

    navigate(url);  
  }

  return (
    <>
      <div className="cardBox1">
           <Card className="card2"  onClick={redirection} >
       
          <CardMedia
            component="img"
            sx={{
              width: 276,
              height: 216,
              borderRadius: 1,
              cursor: "pointer",
              background: "#f0f0f",
              borderStyle: "none",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            image={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photoreference}&sensor=false&key=${props.apiKey}`}
            alt="Photo reference"
          />
          <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h6"
                className="position-Start-text conteneur-carte"
              >
                
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<CreditCardIcon />}
                  aria-owns={open ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  PAY
                </Button>
                <Popover
                  id="mouse-over-popover"
                  sx={{
                    pointerEvents: "none",
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <Typography
                    sx={{ p: 2 }}
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                  >
                    Payement par carte disponible
                  </Typography>
                </Popover>
                <p className="typeResto">{props.type}</p>
              </Typography>
              <Typography
                component="div"
                variant="h2"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <p className="titleCarteName">
                  {props.name ? props.name : "?"}
                </p>
                <p className="ratingCarte">{props.starsRating}</p>
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                className="position-Start-text  "
              >
                <p className="adresseCarte"> {props.adress}</p>
              </Typography>
              <Typography component="div" className="position-Start-text">
                {props.open ? (
                  <div className="position-Start-text">
                    {" "}
                    OUVERT <MeetingRoomOutlinedIcon />
                  </div>
                ) : (
                  <div className="position-Start-text">
                    {" "}
                    FERME <DoDisturbOffIcon />
                  </div>
                )}
              </Typography>

              <Typography
                variant="subtitle1"
                color="red"
                component="div"
                className="position-Start-text"
              >
                <p className="reductionCarte">{"- 20% code promo"}</p>
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </div>
      <div style={{ width: "100%", marginTop: 6, marginBottom: 6 }}>
        <Divider />
      </div>
    </>
  );
}
