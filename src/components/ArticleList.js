import { UserProfile } from "./UserProfileDB"
import Article from "./Article"
import { Box } from "@mui/system"

export default function ArticleList() {
    return (
        <div>
            <Box display="flex">
                {UserProfile.newsArticles.map((article, index) => <Article article={article} />)}
            </Box>
        </div>
    )
}