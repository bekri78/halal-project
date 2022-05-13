import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function SimpleRating(props) {
  return (
  
      <Box component="fieldset" mb={3} borderColor="transparent" style={{display:'flex', justifyContent:'center', alignItems:'center',margin:'auto'}}>
        {props.stars ? <Rating name="read-only" value={props.stars} precision={0.5} readOnly /> : ' Pas encore de note'}
        {/* <Typography component="legend">{props.stars}</Typography> */}
      </Box>
    
  );
}

 