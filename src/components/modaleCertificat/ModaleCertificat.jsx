import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const options = [
  'ACHAHADA',
  'ALTAKWA',
  'ARGML',
  'AVS',
  'European Halal Trust',
  'HMC',
  'HALAL VERIF',
  'HALAL SERVICES',
];
const optionFiltreResto = [
  'Fast-food',
  'Burger',
  'Français',
  'Africain',
  'Italien',
  'Asiatique',
  'Cuisine du monde',
  'Indien',
  'Turc',
  'Oriental',
  'Sud-Ouest',
  'Portugais',
  'Vietnamien',

];


function ConfirmationDialogRaw(props) {

  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle> {props.modaleoption === "Certficat" ? "Certificat":"Restaurant"}</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >

          {props.modaleoption === "Certficat" ? options.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />
          )):
          optionFiltreResto.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />

          ))
        
        }
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default function ModaleCertificat(props) {
  const [open, setOpen] = React.useState(props.openCertificat);
  const [value, setValue] = React.useState('AVS');
  let optionValue = props.modaleoption

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    props.closeModaleCertificat(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="div" role="group"> 
        <ConfirmationDialogRaw
        modaleoption={props.modaleoption}
          id="ringtone-menu"
          keepMounted
          open={props.openCertificat}
          onClose={handleClose}
          value={value}
        />
      </List>
    </Box>
  );
}
