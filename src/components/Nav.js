import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {

    const activeButtonStyle = { backgroundColor: "#76b3ef", borderRadius: 8 }

    const buttonStyle = {
        backgroundColor: "#003399",
        color: "#fff",
        m: 0.5,
        '&:hover': { backgroundColor: "#0044cc" }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <NavLink to="/" activeStyle={activeButtonStyle} style={{ textDecoration: "none" }} exact><Button sx={buttonStyle}>Home</Button></NavLink>
                    <NavLink to="/profiles" activeStyle={activeButtonStyle} style={{ textDecoration: "none" }}><Button sx={buttonStyle}>Profiles</Button></NavLink>
                    <NavLink to="/about" activeStyle={activeButtonStyle} style={{ textDecoration: "none" }}><Button sx={buttonStyle}>About</Button></NavLink>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}