import { Paper, Typography } from "@mui/material";

export default function Article({ article }) {
    return (<article>
        <Paper elevation={4} sx={{ m: 5, p: 2 }}>
            <Typography variant="h4">{article.title}</Typography>
            <hr />
            <Typography variant="p">{article.article}</Typography>
        </Paper>
    </article>)
}