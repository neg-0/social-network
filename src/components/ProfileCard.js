import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function ProfileCard({ profile, selectFunc, id }) {

    return (
        <Card>
            <CardActionArea onClick={() => selectFunc(id)}>
                <CardMedia
                    component="img"
                    height="300"
                    image={profile.profileImage}
                    alt={profile.firstName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {profile.firstName}
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
            </CardActionArea>
        </Card>
    );
}