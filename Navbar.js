import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {Link} from 'react-router-dom'
import './Navbar.css'


export const Navbar = () => {
  
  return (
    <nav>
    <AppBar position='static' style={{ background: '#3f51b5' }}>
        <Toolbar>
           <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
              <ShoppingCartIcon />
           </IconButton>
           <Typography variant='h6' component='div'  >
              upGrad-Eshop
           </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Button id='link' color='inherit'  component={Link} to={"/Login"}>Login</Button>
          <Box sx={{ flexGrow: 0.02 }} />
          <Button id='link' color='inherit'  component={Link} to={"/Signup"}>Sign up</Button>
        </Toolbar>
    </AppBar>
    </nav>
  )
} 
