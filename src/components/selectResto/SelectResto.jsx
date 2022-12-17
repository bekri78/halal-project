import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import InputAdornment from '@mui/material/InputAdornment';
import './SelectResto.css'

export default function SelectResto() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: '50%' }}
 
      renderInput={(params) =>
         <TextField 
         required
         variant="outlined"
           style={{backgroundColor:'white'}} {...params}  label="Restaurant"
             />}/>
  );
}






// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'Fast-Food'},
  { label: 'Italian'  },
  { label: 'Oriental'   },
  { label: 'Japonais'  },
  { label: 'Chinois' },
  { label: "Vietnamien"  },
  { label: 'Turc' },
  {
    label: 'Français' ,
  },
  { label: 'Burger' },
  { label: 'Indien' },
  {
    label: 'Mexicain'
  },
  {
    label: 'Africain'
  }
   
];
