import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}


const marks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    }, 
    {
    value: 5,
      label: '5',
    }
  ];
export default function Select() {
  return (
    <Box sx={{ width: 300,marginTop:"10%", marginBottom:'10%', padding:2 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={1}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        marks={marks}
        step={1}
        min={1}
        max={5}
      />
    </Box>
  );
}
