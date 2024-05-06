import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"

const Header = () => {
  return (
    <Box className="head" sx={{ display: "flex", justifyContent: "center", width: "100%", height: "150px"}}>
      <AppBar className="head" position="static" sx={{ width: "100%", height: "150px", flexShrink: 0 }}>
        <Toolbar className="head" sx={{ width: "100%", justifyContent: "space-between" }}>
          <img src="/Logo.png" alt="Neuroconexion logo" style={{ width: "150px", margin: "0 auto" }} />
          <Box sx={{position: "fixed", top: "25px", right: "50px" }} >
            <Button className="buttons" color="inherit"><span className="btext" >Signup</span></Button>
            <Button className="buttons" color="inherit"><span className="btext" >Login</span></Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header