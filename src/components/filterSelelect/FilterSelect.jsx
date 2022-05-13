import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuRating from "../menuRating/MenuRating";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ModaleCertificat from "../modaleCertificat/ModaleCertificat";
import MosqueIcon from "@mui/icons-material/Mosque";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Chip from "@mui/material/Chip";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import StarsIcon from "@mui/icons-material/Stars";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import "./FilterSelect.css";

export default function SelectVariants(props) {
  const [openCertificat, setOpenCertificat] = React.useState(false);
  const [colorChipOuvert, setColorChipOuvert] = React.useState(false);
  const [colorChipPopulaire, setColorChipPopulaire] = React.useState(false);
  const [colorChipPriere, setColorChipPriere] = React.useState(false);
  const [modaleoption, setModaleption] = React.useState("");


  const handleChangeCertificat = (event) => {
    setOpenCertificat(true);
    setModaleption("Certficat");
  };
  const handleChangeRestaurant = (event) => {
    setOpenCertificat(true);
    setModaleption("Restaurant");
  };
 
  const ouvert = () => {
    setColorChipOuvert(!colorChipOuvert);
    props.restoOuvertFilter(!colorChipOuvert);
  };
  const populaire = () => {
    setColorChipPopulaire(!colorChipPopulaire)
    props.restoPopulaire(!colorChipPopulaire);
       
  };
  const priere = () => {

      setColorChipPriere(!colorChipPriere)
      props.restoPriereFilter(colorChipPriere);
  
  };

  return (
    <div className="conteneur-filter">
      <Stack spacing={2} direction="row">
        <Chip
          icon={<WorkspacePremiumIcon />}
          onClick={handleChangeCertificat}
          label="Certificat Halal"
        />
        <Chip
          icon={<MosqueIcon />}
          color={colorChipPriere ? "success" : "default"}
          label="Salle de prière"
          onClick={priere}
        />
        <Chip
          icon={<RestaurantIcon />}
          onClick={handleChangeRestaurant}
          label="Restautant"
        />
        <Chip
          icon={<StarsIcon />}
          color={colorChipPopulaire ? "success" : "default"}
          onClick={populaire}
          label="Populaire"
        />
        <Chip
          icon={<MeetingRoomIcon />}
          color={colorChipOuvert ? "success" : "default"}
          onClick={ouvert}
          label="Ouvert"
        />

        <MenuRating />
        {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Note </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={note}
            onChange={handleChangeNote}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl> */}
      </Stack>
      <ModaleCertificat
        openCertificat={openCertificat}
        modaleoption={modaleoption}
        closeModaleCertificat={(close) => setOpenCertificat(close)}
      />
    </div>
  );
}
