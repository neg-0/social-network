import { AppBar, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { UserProfile } from "./UserProfileDB";
import { useParams } from "react-router";
import { alpha } from '@mui/material/styles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0
};

export default function UserPicture() {

    const { id } = useParams()

    if (id === undefined) {
        return null
    }

    const profile = UserProfile.contactProfiles[id]

    return (<Box sx={style}>
        <Paper elevation={5} sx={{ p: 4 }}>
            <AppBar position="absolute" sx={{ backgroundColor: alpha("#000", 0.6) }}><Typography variant="h2" component="div" color="#fff">{profile.firstName} {profile.lastName}</Typography></AppBar>
            <Link to={`/profiles/${id}`}>
                <img src={profile.profileImage} alt={profile.firstName} style={{
                    maxWidth: "75vw",
                    maxHeight: "75vh",
                    aspectRatio: 16 / 9,
                    objectFit: "contain"
                }} />
            </Link>
        </Paper>
    </Box>)
}



// Pictures Route: "/profiles/:id/profile-image/"
// As a user, I can click the profile picture link in one of my contact's profiles so that I can see an enlarged version of their profile picture.