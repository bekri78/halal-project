import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './SelectionGrid.css'
import CardSelection from '../cardSelection/CardSelection';
import pictureData from "../../../ressource/data/cardSelection";
export default function SelectionGrid() {

    
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin:20,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
  <Box sx={{ flexGrow: 1 }} style={{ width:'100%',height:'100%'}}>
      <Grid container spacing={3} xs={12} style={{ margin:'auto', display:'flex', justifyContent:'center'}}>

        <Grid item xs={12} md={6}lg={4}>
          <div className='montagne'><h3>Notre selection de la semaine</h3></div>
        </Grid>
        <Grid item xs={12} md={6} lg={7} style={{padding:'24px'}}>
        <Grid container spacing={3} xs={11} style={{margin:'auto', display:'flex',justifyContent:'center'}}>
        <CardSelection data ={pictureData[0].image} nom={pictureData[0].nom} note={pictureData[0].note} ville={pictureData[0].ville}/>
        <CardSelection data ={pictureData[1].image} nom={pictureData[1].nom} note={pictureData[1].note} ville={pictureData[1].ville}/>
      
        </Grid>
        <Grid container spacing={3} xs={11} style={{margin:'auto', display:'flex',justifyContent:'center'}}>
   
        <CardSelection data={pictureData[2].image} nom={pictureData[2].nom} note={pictureData[2].note} ville={pictureData[2].ville}/>
        <CardSelection data={pictureData[3].image} nom={pictureData[3].nom} note={pictureData[3].note} ville={pictureData[3].ville}/>
        </Grid>

        </Grid>
      </Grid>
    </Box>
  )
}
