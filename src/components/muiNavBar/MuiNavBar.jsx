import React,{useEffect, useState, useContext} from "react";
import { UserContextModalConnexion } from "../../useContext";
import {onAuthStateChanged, signOut} from "firebase/auth"
import { auth } from "../../utils/Firebase.config";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./MuiNavBar.css";


const ResponsiveAppBar = () => {
  const [ user, setUser] = useState(null)
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(false);
  const [themeMode, setThemeMode] = useState(false);
  const { value, setValue } = useContext(UserContextModalConnexion);

  useEffect(()=>{

    onAuthStateChanged(auth,(currentUser)=> {
      setUser(currentUser)
    })
  },[])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log("click");
  };

  const handleCloseNavMenu =  async() => {
    setAnchorElNav(null);
  };

  const myAccount = () => {
    console.log("redirection vers page mon compte");
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  
  const handleCloseUserMenuAndConnexion = async () => {
    if(user){
  await signOut(auth)
    }else{

      setAnchorElUser(null);
      setValue(!value);
    }
  };

  const themeSelection = () => {
    setThemeMode(!themeMode);
  };

  return (
    <AppBar className="container-mui" color="primary" position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ maxHeight: 41, minHeight: 41 }}>
          <RestaurantMenuIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="./"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Halal
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to={"./Carte"}>
                    <span className="link-appBar">
                      {" "}
                      <DashboardIcon /> Carte
                    </span>
                  </Link>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to={"./Apropos"}>
                    <span className="link-appBar">
                      <ArticleIcon />
                      Apropos
                    </span>
                  </Link>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to={"./Contact"}>
                    <span className="link-appBar">
                      <ContactPageIcon />
                      Contact
                    </span>
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <RestaurantMenuIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="./"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            style={{ justifyContent: "flex-end", marginRight: 30 }}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to={"./Carte"}>
                <span className="link-appBar">
                  {" "}
                  <DashboardIcon /> Carte
                </span>
              </Link>
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to={"./Apropos"}>
                <span className="link-appBar">
                  <ArticleIcon />
                  Apropos
                </span>
              </Link>
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to={"./Contact"}>
                <span className="link-appBar">
                  <ContactPageIcon />
                  Contact
                </span>
              </Link>
            </Button>

            <Button
              onClick={themeSelection}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <span className="link-appBar">
                {themeMode ? (
                  <>
                    {" "}
                    <LightModeIcon /> Light
                  </>
                ) : (
                  <>
                    {" "}
                    <DarkModeIcon /> Dark{" "}
                  </>
                )}
              </span>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Parametre Compte">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user && (
                <MenuItem onClick={myAccount}>
                  <Typography textAlign="center"> Mon compte</Typography>
                </MenuItem>
              )}
              <MenuItem onClick={handleCloseUserMenuAndConnexion}>
                <Typography textAlign="center">
                  {" "}
                  {user  ? "Deconnexion" : "Connexion"}{" "}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
