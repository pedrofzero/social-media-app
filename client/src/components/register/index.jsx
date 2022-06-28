import React from 'react'
import { Box, Stack, Grid, Link, TextField, FormControlLabel, Checkbox, Button, Container } from '@mui/material';
import Navbar from 'layout/navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const navigate = useNavigate();
    axios.defaults.baseURL = 'http://localhost:8080';
    const register = () => {
        axios.post('/register')
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        }
        )
    }

    return (
        <>
            <Navbar />
            <Container maxWidth='sm'>
                <Box component="form" onSubmit={() => console.log("sup")} noValidate sx={{ mt: 1 }}>
                    <form onSubmit={() => register()} method="POST">
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
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
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link variant="body2" onClick={() => navigate("/login")}>
                                    {"Login here"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </>
    )
}

export default Register