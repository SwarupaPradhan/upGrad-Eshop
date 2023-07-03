
import { Container, TextField, Link, Grid, Box, Avatar, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './Login.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const navigate = useNavigate();
  const [useremail, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const users = [{ useremail: "abc@upgrad.com", password: "testpassword" }];
  const handleSubmit = (event) => {
    event.preventDefault();
    const account = users.find((user) => user.useremail === useremail);
    if (account && account.password === password) {
        setauthenticated(true)
        localStorage.setItem(authenticated, true);
        navigate("/Product");
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const avatarStyle = {backgroundColor:'#FF0000'};

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid align='center'>
              <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                 <h2>Sign In</h2>
        </Grid>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={useremail}
            onChange={(e) => setemail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            autoComplete="current-password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{ background: '#3f51b5' }}
            >Sign in
          </Button>
          <Grid container>
            <Grid item>
              <Link id='link' color='inherit'  component={Link} to={"/Signup"} >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      
      
      <div className='text-center' >
      Copyright © <span style={{textDecoration : 'underline'}}>upGrad</span> 2021
      </div>
      
    </Container>
  );
}