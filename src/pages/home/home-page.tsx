import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react'
import SideBar from '../../components/sidebar/sidebar_component';



const HomePage: React.FC = () => {
    return (
        <div className="home">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <div>What do you think?</div>

                    </Grid>
                    <Grid item xs={4}>
                        <SideBar />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}


export default HomePage;