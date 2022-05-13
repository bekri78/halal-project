import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Select from "./select/Select";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import StarHalfIcon from "@mui/icons-material/StarHalf";
 

export default function MenuRating() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Chip
        icon={<StarHalfIcon />}
        label="Note"
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <h5 style={{ marginLeft: "5%" }}>Note</h5>
        <Divider />
        <Select />
        <Divider />
        <Button
          variant="text"
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "2%",
            marginTop: 6,
          }}
          onClick={handleClose}
        >
          Fermer
        </Button>
      </Menu>
    </div>
  );
}
