import * as React from "react";
 
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./UserComment.css";

export default function UserComment(props) {
  return (
 
      <ListItem alignItems="flex-start" style={{width:'50%'}}>
        <ListItemAvatar>
          <Avatar
            alt="userPhoto "
            srcSet={
              props.profil_picture
                ? `${props.profil_picture}`
                : "https://lh3.googleusercontent.com/a-/AOh14GilipsIm-FnyZc3xc5N3JWC3te7PeGRUu-oFDlg=s128-c0x00000000-cc-rp-mo-ba4"
            }
          />
        </ListItemAvatar>

        <ListItemText
          primary={props.name_user}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {" "}
                <span className="noteAvis">{`${props.note_user}/5`}</span>
              </Typography>

              <br />

              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {props.text_avis ? props.text_avis : " "}
              </Typography>
            </React.Fragment>
          }
        />
        <ListItemText />
      </ListItem>
    
   
  );
}
