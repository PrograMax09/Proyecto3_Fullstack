import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"
import { Menu, MenuItem } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Header = ({setToken}) => {

  const [anchorEl, setAnchorEl] = useState(null)

  const navigate = useNavigate()

 

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLogOut = () => {
    localStorage.removeItem('token')
    setToken(null)
    localStorage.removeItem('id')
    handleClose()
    navigate('/landing')
    
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      className='head'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '150px',
        position: 'relative',
      }}
    >
      <AppBar
        className='head'
        position='static'
        sx={{width: '100%', height: '150px', flexShrink: 0}}
      >
        <Toolbar
          className='head'
          sx={{width: '100%', justifyContent: 'space-between'}}
        >
          <img
            src='/Logo.png'
            alt='Neuroconexion logo'
            style={{width: '150px', margin: '0 auto'}}
          />
          <Box sx={{position: 'absolute', top: '25px', right: '50px'}}>
            {localStorage.getItem('token') ? (
              <div>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  <AccountCircle fontSize='large' />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={() => {
                      navigate('/profile')
                      handleClose()
                    }}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogOut} style={{color: 'red'}}>
                    Log out
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <>
                <Button className='buttons' color='inherit'>
                  <span className='btext'>Signup</span>
                </Button>
                <Button
                  className='buttons'
                  color='inherit'
                  onClick={() => navigate('/login')}
                >
                  <span className='btext'>Login</span>
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header