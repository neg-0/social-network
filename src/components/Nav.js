import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export default function Nav() {

    const activeButtonStyle = { backgroundColor: "#76b3ef" }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My Profile Page
                    </Typography>
                    <NavLink to="/" activeStyle={activeButtonStyle} exact><Button color="inherit">Home</Button></NavLink>
                    <NavLink to="/profiles" activeStyle={activeButtonStyle}><Button color="inherit">Profiles</Button></NavLink>
                    <NavLink to="/about" activeStyle={activeButtonStyle}><Button color="inherit">About</Button></NavLink>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}