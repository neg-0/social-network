import { Paper, Typography } from "@mui/material";

export default function Article({ article }) {
    return (<article>
        <Paper elevation={2} sx={{ m: 5, p: 2 }}>
            <Typography variant="h4">{article.title}</Typography>
            <Typography variant="p">{article.article}</Typography>
        </Paper>
    </article>)
}