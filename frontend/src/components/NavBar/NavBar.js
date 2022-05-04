import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyringe } from "@fortawesome/fontawesome-free-solid";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FontAwesomeIcon icon={faSyringe} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Covid Recordes
          </Typography>
          <Button component={Link} to="/" color="inherit">
            Home Page
          </Button>
          <Button component={Link} to="/summary" color="inherit">
            Summary Page
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
