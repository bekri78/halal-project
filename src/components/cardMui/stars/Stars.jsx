import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function SimpleRating(props) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Note:</Typography>
        {props.stars ? <Rating name="read-only" value={props.stars} readOnly /> : ' Pas encore de note'}
      </Box>
    </div>
  );
}