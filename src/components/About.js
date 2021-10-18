import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { UserProfile } from "./UserProfileDB"


export default function About() {
    return (<Box sx={{ p: 4, width: "50vw", mx: "auto" }}>
        <Typography variant="h2">About Us</Typography>
        <Paper elevation={5} sx={{ p: 5, m: 4 }}>
            <Typography variant="p" component="div" margin={2}>This page is a poorly done mockup of a generic social networking site, offering moderately
                acclaimed, universally acknowledged coverage of breaking local news events. Rising from its
                humble beginnings as a print newspaper in 1756, this page now enjoys a daily readership of 1 or 2 views a day, mainly when the instructors
                are reviewing this checkpoint.</Typography>

            <Typography variant="p" component="div" margin={2}>This page contains {UserProfile.newsArticles.length} articles and {UserProfile.contactProfiles.length} contacts.
                You can tell by the way it is that we mean serious business. It’s not so much as so little as to do with what everything is. But it is within our self-interest
                to understand the topography of our lives unto ourselves. The future states that there is no time other than the collapsation of that sensation of the mirror of
                the memories in which we are living. Common knowledge but important nonetheless. </Typography>

            <Typography variant="p" component="div" margin={2}>As we face fear in these times and fear is all around us. We also have anti-fear. It’s hard to imagine or measure.
                The background radiation is simply too static to be able to be seen under the normal spectral analysis. </Typography>

            <Typography variant="p" component="div" margin={2}>But we feel as though there are times when a lot of us—you know what I’m saying? But like—you know what I’m saying?
                Cause like as a hip-hop thing—you know what I’m saying? Like Ted—you know Ted will be rocking. You know what I’m saying? So like um—</Typography>

            <Typography variant="p" component="div" margin={2}>So I wrote a song. I hope you guys dig it. It’s a song about people and sasquatches, other French science stuff.
                That’s French science. Okay. Here we go.</Typography>

            <Typography variant="p" component="div" margin={2}>We are not responsible for any brain cells you might have lost during this reading. Bless your heart.</Typography>
        </Paper>
    </Box>)
}



// About Us Route: "/about"
// As a user, when I click the About button in the navbar, I am directed to the "About Us"
// page with a small blurb about social-networking company so that I can learn a more about their business.