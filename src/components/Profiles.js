import { UserProfile } from "./UserProfileDB"
import ProfileCard from "./ProfileCard"
import { Box } from "@mui/system"
import { Typography } from "@mui/material"

export default function Profiles() {
    return (
        <div>
            <Box sx={{ p: 4 }}>
                <Typography variant="h2">Contacts</Typography>
                <Box display="flex" flexWrap="wrap">
                    {UserProfile.contactProfiles.map((profile, index) => <ProfileCard profile={profile} />)}
                </Box>
            </Box>
        </div>
    )
}


// Profile View: "/profiles"
// As a user, when I click the Profiles buttons in the navigation bar, I am sent to "Profiles" page so I can see a list of my contacts.