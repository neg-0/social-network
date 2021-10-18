import { UserProfile } from "./UserProfileDB"
import Article from "./Article"
import { Box } from "@mui/system"

export default function ArticleList() {
    return (
        <div>
            <Box display="flex" flexWrap="wrap">
                {UserProfile.newsArticles.map((article, index) => <Article key={index} article={article} />)}
            </Box>
        </div>
    )
}