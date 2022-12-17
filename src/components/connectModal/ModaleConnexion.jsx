import React, { useContext } from "react";
import {UserContextModalConnexion} from '../../useContext'
import ConnectModal from './ConnectModal'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
 
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  heigth:'80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModaleConnexion(props) {

   
  const {value, setValue} = useContext(UserContextModalConnexion)

 

  const closeModale = () => {
 
    setValue(!value)
  };
 

  return (
    <>

    <Modal
      open={value}
      onClose={closeModale}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <ConnectModal/>
        
        <Button style={{float:'right', marginTop:'20px'}} variant="contained" onClick={closeModale}>Fermer</Button>
      </Box>
    </Modal>
  </>
  );
}
