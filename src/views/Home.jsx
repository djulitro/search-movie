import { Container, Grid, Typography } from "@mui/material";

export default function Home() {
    return (
        <Grid container>
            <Grid item xs={12} md={6} display={'flex'} alignItems={'center'}>
                <Typography variant="h2" fontWeight={500}>
                    ¡Encuentra la pelicula que buscas!
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h1">
                    ¡Encuentra la pelicula que mas buscas!
                </Typography>
            </Grid>
        </Grid>
    );
}