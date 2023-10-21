import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useSelector } from "react-redux";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [orderNav, setOrderNav] = React.useState(null);
  const cart = useSelector((state) => state.cart.cart);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenNavMenuOrder = (event) => {
    setOrderNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseNavMenuOrder = () => {
    setOrderNav(null);
  };

  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ borderRadius: "10px", backgroundColor: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 5,
              display: { xs: "none", md: "flex" },
              fontFamily: "cursive",
              fontWeight: 700,
              fontSize: "2rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => navigate("/")}
          >
            Amazoon
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
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to={`/`}
                >
                  Home
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to={`/contact`}
                >
                  Contact
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              justifyContent: "left",
              flexGrow: 1,
              fontFamily: "cursive",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => navigate("/")}
          >
            Amazoon
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              textTransform: "uppercase",
              justifyContent: "flex-start",
              gap: "4rem",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "white",
              }}
              to={"/"}
            >
              Home
            </Link>
            <Link
              style={{
                textDecoration: "none",
                marginRight: "10px",
                color: "white",
              }}
              to={"/contact"}
            >
              Contact
            </Link>
          </Box>

          {/* mobile accoutn */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <AccountCircleOutlinedIcon
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenuOrder}
              color="inherit"
              sx={{
                fontSize: "30px",
                marginLeft: "10px",
              }}
            >
              <MenuIcon />
            </AccountCircleOutlinedIcon>
            <Menu
              id="menu-appbar"
              anchorEl={orderNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(orderNav)}
              onClose={handleCloseNavMenuOrder}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenuOrder}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to={`/`}
                >
                  Prashant Sharma
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          {/* mobile account */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              textTransform: "uppercase",
              justifyContent: "flex-end",
              gap: "4rem",
            }}
          >
            <Box>
              <Typography variant="h10" sx={{ fontWeight: "600" }}>
                hello Prashant
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "12px", textAlign: "center" }}
              >
                Accounts & lists
              </Typography>
            </Box>
            <Box>
              <Link to={"/cart"} style={{ color: "white" }}>
                <AddShoppingCartOutlinedIcon
                  sx={{ fontSize: "2rem", cursor: "pointer" }}
                />
              </Link>
            </Box>
          </Box>
          <Box sx={{ position: "relative" }}>
            <Link to={"/cart"} style={{ color: "white" }}>
              <AddShoppingCartOutlinedIcon
                sx={{ display: { xs: "block", md: "none" }, cursor: "pointer" }}
              />
            </Link>
            <Typography
              sx={{
                position: "absolute",
                left: { xs: 14, md: -10 },
                top: { xs: -10, md: -30 },
                backgroundColor: "white",
                width: "22px",
                color: "black",
                borderRadius: 10,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {cart.length}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
