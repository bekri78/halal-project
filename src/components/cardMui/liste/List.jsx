import React from 'react';
import { makeStyles } from '@mui/styles';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export default function Liste(props) {
//   const classes = useStyles();

  return (
    <div  >
      <ListItem></ListItem>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.author} src={props.profile} />
        </ListItemAvatar>
        <ListItemText
          primary={`Note: ${props.noteUser}`}
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2"   color="textPrimary">
                {props.author} :
              </Typography>
              {props.text}
            </React.Fragment>
          }
        />
      </ListItem>
    </div>
  );
}