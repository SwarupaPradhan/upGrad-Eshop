import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Box, InputBase, Card,CardActions,CardContent, CardMedia } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles';
import {Link} from 'react-router-dom'
import './Product.css'
import imgShoe from './BlueShoe.jpg';



export const Product = () => {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '30ch',
      },
    },
  }));

  return (
    <>
    <nav>
    <AppBar position='static' style={{ background: '#3f51b5' }}>
        <Toolbar>
           <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
              <ShoppingCartIcon />
           </IconButton>
           <Typography variant='h6' component='div'  >
              upGrad-Eshop
           </Typography>
           <Box sx={{ flexGrow: 0.4 }} />
           <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Button id='link' color='inherit' component={Link} to={"/"}>Home</Button>
          <Box sx={{ flexGrow: 0.1 }} />
          <Button id='link' color='inherit' component={Link} to={"/Product"}>Add Product</Button>
          <Box sx={{ flexGrow: 0.1 }} />
          <Button variant='contained' id='Button'  component={Link} to={"/Logout"}>Logout</Button>
        </Toolbar>
    </AppBar>
    </nav>
  

  <div style={{margin: '25%'}}>
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="230"
        src={imgShoe}
        alt="BlueShoe"
      />
      <CardContent>
        <Box display='flex'>
          <Typography variant='h6' component='div' display={'flex'} >
              BlueShoe
           </Typography>
           <Box sx={{ flexGrow: .8 }} />
           <Typography variant='h6' component='div'  >
              1000Rs
           </Typography>
        </Box>  
        <Typography variant="body2" color="text.secondary">
        Running Shoes Breathable Trainers Lace-Up Sports Shoes Trainers for Men Women.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' backgroundColor= '#7307f7' size="small">Buy</Button>
      </CardActions>
    </Card>
    </div>
    </>
  )

} 
