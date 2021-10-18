import CloseIcon from '@mui/icons-material/Close';
import { AppBar } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function UserProfile({ profile, closeFunc }) {
    if (profile === undefined)
        return null

    let birthday = new Date(profile.birthday).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })

    return (
        <Box>
            <Card>
                <AppBar position="relative" sx={{ backgroundColor: alpha("#000", 0.2) }}>
                    {/* <Toolbar> */}
                    <IconButton
                        aria-label="close"
                        onClick={() => closeFunc(undefined)}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 10,
                            color: "white"
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, textShadow: "0px 0px 8px #000" }}>
                        {details?.name} - ${details?.default_price}
                    </Typography> */}
                    {/* </Toolbar> */}
                </AppBar>
                <Link to={`/profiles/${profile.id}/profile-image`}>
                    <CardMedia
                        component="img"
                        image={profile.profileImage}
                        alt={profile.firstName}
                    />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {profile.firstName} {profile.lastName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Birthday: {birthday}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography> */}
                </CardContent>
                {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
            </Card>
        </Box>
    );
}



// User Profile Route: "/profiles/:id"
// As a user, when I click on a contacts name in the contact list,
// I should see their profile alongside the contact list so that I can continue to
// click through different contacts and see their profiles without navigating away from the contact list.