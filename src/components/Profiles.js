import { Grid, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useParams } from "react-router"
import ProfileCard from "./ProfileCard"
import UserDetails from "./UserProfile"
import { UserProfile } from "./UserProfileDB"

export default function Profiles({ history }) {

    const { id } = useParams()

    function handleSelection(profile) {
        //window.location = `/profiles/${profile}`
        if (profile === undefined) {
            history.push(`/profiles`)
        } else {
            history.push(`/profiles/${profile}`)
        }
    }

    return (
        <div>
            <Box sx={{ p: 4, width: "100%" }}>
                <Typography variant="h2">Contacts</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={id === undefined ? 12 : 6}>
                        <Grid container spacing={2}>
                            {UserProfile.contactProfiles.map((profile, index) => (
                                <Grid item key={index} sm={12} md={6} lg={4}>
                                    <ProfileCard profile={profile} id={index} selectFunc={handleSelection} />
                                </Grid>))}
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            <UserDetails profile={UserProfile.contactProfiles[id]} closeFunc={handleSelection} />
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}


// Profile View: "/profiles"
// As a user, when I click the Profiles buttons in the navigation bar, I am sent to "Profiles" page so I can see a list of my contacts.