import { Box } from "@mui/system"
import ArticleList from "./ArticleList"
import { Typography } from "@mui/material"

export default function Home() {
    return (<Box sx={{ p: 4 }}>
        <Typography variant="h2">News</Typography>
        <ArticleList />
    </Box>)
}

//Root Route: "/"
// As a user, when I navigate to "/" (the root) or when I click the Home button,
// I am directed to "My Profile Page" with navbar at the top of the page with three buttons (Home, About, Profiles)
// so that I can see my own profile with my news feed showing the News Articles that I care about.