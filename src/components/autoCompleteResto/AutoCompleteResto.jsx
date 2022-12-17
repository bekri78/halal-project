
import React, {Fragment} from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import InputAdornment from '@mui/material/InputAdornment';
 
export default function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
     
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label= {<Fragment>
          <RestaurantIcon   />
          {" "}
           Restaurant
          </Fragment>}

          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Fast-Food'},
  { title: 'Italian'  },
  { title: 'Oriental'   },
  { title: 'Japonais'  },
  { title: 'Chinois' },
  { title: "Vietnamien"  },
  { title: 'Turc' },
  {
    title: 'Français' ,
  },
  { title: 'Burger' },
  { title: 'Indien' },
  {
    title: 'Mexicain'
  },
  {
    title: 'Africain'
  }
   
];
