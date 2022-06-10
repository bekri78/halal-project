import React from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function BoxCard(props) {
  return (
    <Grid item={true} xs={12} md={4}>
    <Box style={{ cursor:'pointer'}}  >
      <div>
        <img
        style={{minHeight:190, maxHeight:190}}
          class="MuiBox-root css-h8f6pa"
          src={props.url}
          alt={props.alt}
        />
      </div>
      <div>
        <h6 className="title-carte-test">{props.title}</h6>
        <span className="span-carte-test">{props.texte}</span>
      </div>
    </Box>
  </Grid>
  )
}
